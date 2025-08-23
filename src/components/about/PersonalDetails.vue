<template>
  <div :class="$style.container">
    <div :class="$style['container__top']">
      <p :class="$style['full-name']">Marcin Kozub</p>
      <div :class="$style.localization">
        <img
          :class="$style['localization__icon']"
          src="@/assets/poland_icon.svg"
          alt="Poland's icon"
        />
        <p :class="$style['localization__text']">Based in Poland</p>
      </div>
    </div>
    <div :class="$style['container__bottom']">
      <p :class="$style['salesforce-text']">SALESFORCE</p>
      <p :class="$style['profession-text']">DEVELOPER</p>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  &__top {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
}

.full-name {
  font-weight: var(--font-bold);
  font-size: 24px;
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

.salesforce-text {
  font-weight: var(--font-bold);
  font-size: 48px;
  padding-right: 20px;
}

.profession-text {
  font-weight: var(--font-bold);
  font-size: 32px;
}
</style>
