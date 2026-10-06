## About

フリーランスのフロントエンドエンジニアです。Vue.js / Nuxt を中心に、要件の整理からアーキテクチャ設計、実装まで引き受けています。

現在は業務システムのリプレイスで、Nuxt と TypeScript を使って画面と共通コンポーネントを作り、コードレビューも担当しています。

## OSS Contributions

<!-- OSS:START -->
### [Vue.js](https://github.com/vuejs/core) (Contributor)

- [fix(runtime-vapor): track reactive object style keys during hydration #15663](https://github.com/vuejs/core/pull/15663) — **Merged**
  Vapor モードでハイドレーションした要素のスタイルが、本番ビルドでリアクティブに更新されない不具合を修正
- [fix(compiler-sfc): return bindings for render in normal script in vapor inline mode #15780](https://github.com/vuejs/core/pull/15780) — Open

### [VueUse](https://github.com/vueuse/vueuse) (Contributor)

- [fix(useElementSize): prefill size based on box option #5524](https://github.com/vueuse/vueuse/pull/5524) — **Merged**（v14.4.0 でリリース）
  box: 'border-box' を指定すると v-element-size のハンドラが呼ばれない不具合を修正
- [fix(useRouteQuery): keep queued queries until the pending navigation settles #5645](https://github.com/vueuse/vueuse/pull/5645) — Open
  クエリを続けて書き換えると、遷移の完了前に書いた値が失われる不具合を修正
- [fix(useRefHistory): clone lastRawValue for shouldCommit comparison #5497](https://github.com/vueuse/vueuse/pull/5497) — Open
  deep: true のとき、shouldCommit に新旧で同じオブジェクトが渡る不具合を修正

### [Nitro](https://github.com/nitrojs/nitro)

- [fix(config): support inline objects and functions in `extends` #4691](https://github.com/nitrojs/nitro/pull/4691) — Open
- [fix(dev): resolve public assets dynamically in the worker #4549](https://github.com/nitrojs/nitro/pull/4549) — Open
  開発サーバーで、サーバー内部から public のファイルを fetch すると 404 になる不具合を修正
<!-- OSS:END -->

---

“To want someone to intrude upon your life—might that be what it means to long to be loved?”
