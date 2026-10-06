// README の OSS Contributions の節を、ホームページの API（meta-syntax.biz）から作り直す
// PR の一覧とステータスは API が GitHub から取る。日本語の説明は website リポジトリの
// server/data/oss-descriptions.ts に書く
import { readFile, writeFile } from 'node:fs/promises'

const API_URL = 'https://meta-syntax.biz/api/oss-contributions'
const README = new URL('../README.md', import.meta.url)
const START = '<!-- OSS:START -->'
const END = '<!-- OSS:END -->'

const res = await fetch(API_URL)
if (!res.ok) throw new Error(`${API_URL} が ${res.status} を返した`)
const { projects, contributions } = await res.json()

// 取得に失敗して空になったときに、README の一覧を消さない
if (!contributions?.length) throw new Error('PR が0件だったので README を書き換えない')

const renderItem = (c) => {
  const status = c.status === 'merged' ? '**Merged**' : 'Open'
  const note = c.note ? `（${c.note}）` : ''
  const lines = [`- [${c.title} #${c.number}](${c.url}) — ${status}${note}`]
  if (c.summary) lines.push(`  ${c.summary}`)
  return lines.join('\n')
}

// マージ済みの PR があるプロジェクトには (Contributor) を付ける
const renderProject = (p) => {
  const items = contributions.filter(c => c.repo === p.repo)
  const contributor = items.some(c => c.status === 'merged') ? ' (Contributor)' : ''
  return [`### [${p.name}](${p.url})${contributor}`, items.map(renderItem).join('\n')].join('\n\n')
}

const section = projects.map(renderProject).join('\n\n')

const readme = await readFile(README, 'utf8')
const start = readme.indexOf(START)
const end = readme.indexOf(END)
if (start === -1 || end === -1) throw new Error(`README に ${START} と ${END} が無い`)

const next = `${readme.slice(0, start + START.length)}\n${section}\n${readme.slice(end)}`
if (next === readme) {
  console.log('変更なし')
} else {
  await writeFile(README, next)
  console.log('README を更新した')
}
