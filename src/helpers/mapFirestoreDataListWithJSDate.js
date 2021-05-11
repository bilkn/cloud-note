export function convertFirestoreDateToJSDate(date) {
  return new Date((date.seconds + date.nanoseconds * 10 ** -9) * 1000);
}

export default function mapFirestoreDataListWithJSDate(dataList) {
  return dataList.map(({ timestamp, lastModified, deletionDate, ...rest }) => {
    return {
      timestamp: convertFirestoreDateToJSDate(timestamp),
      lastModified: lastModified
        ? convertFirestoreDateToJSDate(lastModified)
        : null,
      deletionDate: deletionDate
        ? convertFirestoreDateToJSDate(deletionDate)
        : null,
      ...rest,
    };
  });
}
