<template>
  <div class="panel-debat-container">
    <card-debat type="done">
      <template slot="body-lower">
        <div class="clap">
          70 <i class="icon icon-clap"></i>
        </div>
        <div class="text">Clap</div>
        <div class="clap">
          70 <i class="icon icon-clap"></i>
        </div>
      </template>
    </card-debat>
    <div class="panel-detail">
      <small class="tag">ekonomi</small>
      <button type="button" class="love-btn">
        <i class="icon icon-love"></i> 50
      </button>
      <button type="button" class="menu-btn">
        <i class="icon icon-menu"></i>
      </button>
      <p class="description">
        2018 pertumbuhan ekonomi Indonesia mengalami pertumbuhan mencapai 5,27%. 2 periode yuk, biar 10,54%.
      </p>
    </div>
  </div>
</template>

<script>
import CardDebat from '@/components/wordstadium/card-debat'
export default {
  name: 'PanelDebatDone',
  components: { CardDebat }
}
</script>

<style lang="sass" scoped>
.panel-debat-container
  display: flex
.debat-card /deep/ .body-lower
  display: flex
  justify-content: space-between
  height: 25px
  padding: 0 10px
  .clap
    flex: 0
    flex-basis: 30px
    font-size: 14px
    font-weight: bold
    line-height: 1.21
    color: #212121
    display: flex
    align-items: flex-start
  .text
    flex: 1
    font-size: 12px
    font-weight: 500
    line-height: 1.33
    letter-spacing: 0.2px
    text-align: center
    color: #7c7c7c

.panel-detail
  flex: 1
  padding: 10px
  margin-top: 10px
  margin-left: 10px
  padding-top: 0
  position: relative
  small
    border: 1px solid #f9d65c
    border-radius: 4px
    padding: 4px
  button.love-btn,
  button.menu-btn
    display: inline-flex
    position: absolute
    top: 0
    right: 0
    background: white
    border: none
    cursor: pointer
  button.love-btn
    right: 35px
    font-size: 12px
    font-weight: bold
    line-height: 1
    color: #111111
    align-items: center
  .description
    margin-top: 10px
    font-family: BwModelicaSS01, Lato, sans-serif
    font-size: 14px
    font-weight: 500
    font-stretch: condensed
    line-height: 1.21
    letter-spacing: 0.1px
    color: #212121

.icon
  display: inline-block
  height: 24px
  width: 24px
  background-repeat: no-repeat
  background-position: center
  background-size: contain
  &.icon-menu
    -webkit-mask: url(~@/assets/icon_more_vertical.svg)
    transform: rotate(90deg)
    background-color: #333
  &.icon-love
    background-image: url(~@/assets/ic-love.svg)
  &.icon-clap
    background-image: url(~@/assets/ic-clap.svg)
    transform: translateY(-5px)

</style>
