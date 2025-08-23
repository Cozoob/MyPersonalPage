<script setup lang="ts">
import PersonalDetails from '@/components/about/PersonalDetails.vue'
</script>

<template>
  <div class="container">
    <div class="container__vital-info vital-info">
      <PersonalDetails class="vital-info__left-wrapper" />

      <img
        class="vital-info__profile-image"
        src="../../assets/marcin_photo.png"
        alt="Marcin's profile"
      />

      <div class="vital-info__right-wrapper right-wrapper">
        <div class="right-wrapper__info-wrapper info-wrapper">
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img
              class="icon-with-number__icon"
              src="https://img.icons8.com/ios/50/FFFFFF/permanent-job.png"
              alt="permanent-job"
            />
            <p class="icon-with-number__number">3+ years</p>
          </div>
          <p class="info-wrapper__title">of experience</p>
        </div>
        <div class="right-wrapper__info-wrapper info-wrapper right-wrapper__certificates-info">
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img
              class="icon-with-number__icon"
              src="../../assets/certificate_icon.png"
              alt="Certificate icon"
            />
            <p class="icon-with-number__number">8</p>
          </div>
          <p class="info-wrapper__title">certificates</p>
        </div>
        <div class="right-wrapper__info-wrapper info-wrapper">
          <div class="info-wrapper__icon-with-number icon-with-number">
            <img
              class="icon-with-number__icon"
              src="../../assets/trophy_icon.png"
              alt="Trophy icon"
            />
            <p class="icon-with-number__number">4</p>
          </div>
          <p class="info-wrapper__title">awards won</p>
        </div>
      </div>
    </div>
    <div class="container__socials-resume socials-resume">
      <div class="socials-resume__social-buttons">social buttons</div>
      <div class="socials-resume__resume-button">resume button</div>
    </div>
    <div class="container__contact-options contact-options">contact-options</div>
    <div class="container__about-text about-text">about-text</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #1d28fd;
}

.vital-info {
  display: flex;
  justify-content: center;
  width: 100%;

  &__left-wrapper {
    transform: translateX(15px);
  }

  &__profile-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    border: 2px #e0e0e0 solid;
  }

  &__right-wrapper {
    transform: translateX(-5px);
  }
}

// left wrapper START

.left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
}

.left-wrapper-top {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

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

// left wrapper END
// right wrapper START
.right-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__certificates-info {
    padding-left: 20px;
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
