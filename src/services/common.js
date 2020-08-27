export const getFromLS = key => localStorage.getItem(key);

export const getTotalWorkingSeconds = (startTime, endTime) => {
  const now = new Date();

  const endTs = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    endTime.substr(0, 2),
    endTime.substr(2, 2)
  );

  const startTs = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    startTime.substr(0, 2),
    startTime.substr(2, 2)
  );

  return Math.ceil((endTs - startTs) / 1000);
};

export const getDiffSecondsFromStart = (startTime, getWorkingSeconds) => {
  const now = new Date();

  const startTs = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    startTime.substr(0, 2),
    startTime.substr(2, 2)
  );

  const diffSeconds = Math.ceil((now - startTs) / 1000);

  return Math.min(diffSeconds, getWorkingSeconds);
};

export const formatMoney = money => {
  return Math.round(Number(money) * 100) / 100;
};
