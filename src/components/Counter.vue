<template>
  <div class="counter-container">
    <div class="main-currency">
      <h1>₹ {{ inr }}</h1>
    </div>
    <div class="secondary-currency">
      <h2>SGD {{ sgd }}</h2>
      <h2>USD {{ usd }}</h2>
    </div>
  </div>
</template>

<script>
import { getExchangeRates } from '../services/forex';
import {
  getFromLS,
  getDiffSecondsFromStart,
  getTotalWorkingSeconds,
  formatMoney
} from '../services/common';

export default {
  data() {
    return { inr: 0, sgd: 0, usd: 0 };
  },
  async created() {
    const { rates } = await getExchangeRates();
    const startTime = getFromLS('startTime');
    const endTime = getFromLS('endTime');
    const monthlySalary = getFromLS('monthlySalary');
    const workingDaysInMonth = getFromLS('workingDaysInMonth');
    const perDaySalary = Number(monthlySalary) / Number(workingDaysInMonth);
    const getWorkingSeconds = getTotalWorkingSeconds(startTime, endTime);
    const perSecSalary = perDaySalary / getWorkingSeconds;

    setInterval(() => {
      if (rates) {
        const { INR, USD } = rates;
        const diffSeconds = getDiffSecondsFromStart(
          startTime,
          getWorkingSeconds
        );
        const payTillNow = diffSeconds * perSecSalary;

        // Assign salary
        this.sgd = formatMoney(payTillNow);
        this.inr = formatMoney(payTillNow * INR);
        this.usd = formatMoney(payTillNow * USD);
      }
    }, 1000);
  }
};
</script>

<style scoped lang="scss">
.counter-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 3.5rem;
    color: #f37b21;
    background: -webkit-linear-gradient(#ef6c00, #ffcc80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .secondary-currency {
    display: flex;
    width: 500px;
    margin: 20px auto;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
    }
  }
}
</style>
