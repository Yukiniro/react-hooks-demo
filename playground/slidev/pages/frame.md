---
layout: center
---

<div class="text-24">
  <span v-click>帧</span>
    /
  <span v-click>快照</span>
</div>

<!--
在 `hooks-based` 的组件下的思维逻辑不能照搬类组件，因为其本身是没有实例和生命周期。 由于函数组件本质上就是一个产生视图的函数，所以我们可以以 **帧** 或者 **快照** 的形式来看待函数组件，每一次的渲染都会产生新的帧，并且新旧帧之前没有任何联系。
-->

---
src: ./pages/hook-list.md
---