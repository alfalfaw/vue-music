<template>
  <div class="control px-5">
    <div class="d-flex ai-center px-2">
      <div class="current-time">
        03:04
      </div>
      <div class="progress-bar flex-1 mx-2">
        <div class="progress-inner"></div>
      </div>
      <div class="total-time">
        03:55
      </div>
    </div>
    <div class="control-btns d-flex jc-between">
      <i class="iconfont icon-mirrorlightctrl"></i>
      <i class="iconfont icon-nextsong"></i>
      <i class="iconfont icon-timeout"></i>
      <i class="iconfont icon-nextsong"></i>
      <i class="iconfont icon-favoriteslist"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control'
}
</script>
<style lang="scss" scoped>
.control {
  .progress-bar {
    background: rgba(0, 0, 0, 0.3);
    height: 4px;
    width: 100%;
    border-radius: 4px;
    position: relative;
    .progress-inner {
      position: absolute;
      left: 0;
      top: 0;
      width: 77%;
      height: 100%;
      background: #1a73e8;
      border-radius: 4px;
    }
  }
  .control-btns {
    .iconfont {
      font-size: 42px;
    }
  }
}
</style>
