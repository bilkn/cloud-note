export default function mapDataListWithDate(datalist) {
  const mappedDataList = datalist.map(
    ({ timestamp, lastModified, deletionDate, ...rest }) => {
      return {
        ...rest,
        timestamp: new Date(timestamp),
        lastModified: new Date(lastModified),
        deletionDate: deletionDate ? new Date(deletionDate) : null,
      };
    }
  );
  return mappedDataList;
}
