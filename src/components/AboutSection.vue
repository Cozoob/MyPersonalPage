<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutSection"
})
</script>

<template>
  <div class="container">
    <div class="container__vital-info vital-info">
      <div class="vital-info__left-wrapper left-wrapper">
        <div class="left-wrapper__left-wrapper-top left-wrapper-top">
          <p class="left-wrapper-top__full-name">Marcin Kozub</p>
          <div class="left-wrapper-top__localization localization">
            <img class="localization__icon" src="@/assets/poland_icon.svg" alt="Poland's icon"/>
            <p class="localization__text">Based in Poland</p>
          </div>
        </div>
        <div class="left-wrapper__left-wrapper-bottom left-wrapper-bottom">
          <p class="left-wrapper-bottom__salesforce-text salesforce-text">SALESFORCE</p>
          <p class="left-wrapper-bottom__position-text position-text">DEVELOPER</p>
        </div>
      </div>
      <img class="vital-info__profile-image" src="@/assets/marcin_photo.png"
           alt="Marcin's profile"/>
      <div class="vital-info__right-wrapper">
        <div class="right-wrapper__info-wrapper info-wrapper">
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img class="icon-with-number__icon" src="@/assets/suitcase_icon.png"
                 alt="Suitcase icon"/>
            <p class="icon-with-number__number">3+ years</p>
          </div>
          <p class="info-wrapper__title">
            of experience
          </p>
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img class="icon-with-number__icon" src="@/assets/certificate_icon.png"
                 alt="Certificate icon"/>
            <p class="icon-with-number__number">8</p>
          </div>
          <p class="info-wrapper__title">
            certificates
          </p>
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img class="icon-with-number__icon" src="@/assets/trophy_icon.png" alt="Trophy icon"/>
            <p class="icon-with-number__number">4</p>
          </div>
          <p class="info-wrapper__title">
            awards won
          </p>
        </div>
        vital-info__right-wrapper
      </div>
    </div>
    <div class="container__socials-resume socials-resume">
      <div class="socials-resume__social-buttons">
        social buttons
      </div>
      <div class="socials-resume__resume-button">
        resume button
      </div>
    </div>
    <div class="container__contact-options contact-options">
      contact-options
    </div>
    <div class="container__about-text about-text">
      about-text
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid green;
}

.vital-info {
  display: flex;
  justify-content: center;
  width: 100%;

  &__profile-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    border: 2px #E0E0E0 solid;
  }
}

.left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.left-wrapper-top {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;

  &__full-name {
    font-weight: var(--font-bold);
    font-size: 24px;
  }
}

.left-wrapper-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;

  &__salesforce-text {
    font-weight: var(--font-bold);
    font-size: 48px;
    padding-right: 20px;
  }

  &__position-text {
    font-weight: var(--font-bold);
    font-size: 32px;
  }
}

.localization {
  display: flex;
  gap: 5px;
  align-items: center;

  &__icon {
    width: 16px;
    height: 16px;
  }

  &__text {
    padding-right: 20px;
  }
}

.info-wrapper {

  &__title {
    font-size: 24px;
  }
}

.icon-with-number {
  display: flex;
  align-items: center;
  gap: 5px;

  &__icon {
    width: 30px;
    height: 30px;
  }

  &__number {
    font-weight: var(--font-bold);
    font-size: 30px;
  }
}
</style>
