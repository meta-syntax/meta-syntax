## About

フリーランスのフロントエンドエンジニアです。Vue.js / Nuxt を中心に、要件の整理からアーキテクチャ設計、実装まで引き受けています。

現在は業務システムのリプレイスで、Nuxt と TypeScript を使って画面と共通コンポーネントを作り、コードレビューも担当しています。

## OSS Contributions

### [Vue.js](https://github.com/vuejs/core) (Contributor)

- [fix(runtime-vapor): track reactive object style keys during hydration #15663](https://github.com/vuejs/core/pull/15663) — **Merged**
  Vapor モードでハイドレーションした要素の `:style` にリアクティブなオブジェクトを渡すと、本番ビルドでキーの変更が DOM に反映されないバグの修正。

### [VueUse](https://github.com/vueuse/vueuse) (Contributor)

- [fix(useElementSize): prefill size based on box option #5524](https://github.com/vueuse/vueuse/pull/5524) — **Merged**（issue [#5347](https://github.com/vueuse/vueuse/issues/5347) で設計提案から）
  `v-element-size` ディレクティブが `box: 'border-box'` 指定時に初期サイズを誤って通知するバグの修正。
- [fix(useRouteQuery): keep queued queries until the pending navigation settles #5645](https://github.com/vueuse/vueuse/pull/5645) — Open
  `useRouteQuery` でクエリを続けて書き換えると、遷移の完了前に書いた値が失われるバグの修正。
- [fix(useRefHistory): clone lastRawValue for shouldCommit comparison #5497](https://github.com/vueuse/vueuse/pull/5497) — Open
  `useRefHistory` で `shouldCommit` に渡る変更前の値がクローンされずオブジェクト参照のまま保持されるため、同値と判定され履歴が積まれないバグの修正。

### [Nitro](https://github.com/nitrojs/nitro)

- [fix(dev): resolve public assets dynamically in the worker #4549](https://github.com/nitrojs/nitro/pull/4549) — Open
  開発サーバーで、サーバー内部から public のファイルを fetch すると 404 になるバグの修正。

---

“To want someone to intrude upon your life—might that be what it means to long to be loved?”
