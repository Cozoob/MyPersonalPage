<script setup lang="ts">
import PersonalDetails from '@/components/about/PersonalDetails.vue'
</script>

<template>
  <div :class="$style.container">
    <div :class="[$style['container__vital-info'], $style['vital-info']]">
      <PersonalDetails :class="$style['vital-info__left-wrapper']" />
      <img
        :class="$style['vital-info__profile-image']"
        src="../../assets/marcin_photo.png"
        alt="Marcin's profile"
      />
      <div :class="[$style['vital-info__right-wrapper'], $style['right-wrapper']]">
        <div :class="[$style['right-wrapper__info-wrapper'], $style['info-wrapper']]">
          <div :class="[$style['info-wrapper__icon-with-number'], $style['icon-with-number']]">
            <img
              :class="$style['icon-with-number__icon']"
              src="https://img.icons8.com/ios/50/FFFFFF/permanent-job.png"
              alt="permanent-job"
            />
            <p :class="$style['icon-with-number__number']">3+ years</p>
          </div>
          <p :class="$style['info-wrapper__title']">of experience</p>
        </div>
        <div
          :class="[
            $style['right-wrapper__info-wrapper'],
            $style['info-wrapper'],
            $style['right-wrapper__certificates-info'],
          ]"
        >
          <div :class="[$style['info-wrapper__icon-with-number'], $style['icon-with-number']]">
            <img
              :class="$style['icon-with-number__icon']"
              src="../../assets/certificate_icon.png"
              alt="Certificate icon"
            />
            <p :class="$style['icon-with-number__number']">8</p>
          </div>
          <p :class="$style['info-wrapper__title']">certificates</p>
        </div>
        <div :class="[$style['right-wrapper__info-wrapper'], $style['info-wrapper']]">
          <div :class="[$style['info-wrapper__icon-with-number'], $style['icon-with-number']]">
            <img
              :class="$style['icon-with-number__icon']"
              src="../../assets/trophy_icon.png"
              alt="Trophy icon"
            />
            <p :class="$style['icon-with-number__number']">4</p>
          </div>
          <p :class="$style['info-wrapper__title']">awards won</p>
        </div>
      </div>
    </div>
    <div :class="[$style['container__socials-resume'], $style['socials-resume']]">
      <div :class="$style['socials-resume__social-buttons']">social buttons</div>
      <div :class="$style['socials-resume__resume-button']">resume button</div>
    </div>
    <div :class="[$style['container__contact-options'], $style['contact-options']]">
      contact-options
    </div>
    <div :class="[$style['container__about-text'], $style['about-text']]">about-text</div>
  </div>
</template>

<style module lang="scss">
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
