module.exports = ({ startDate, endDate, minCount, maxCount }) => {
  return [
    {
      $project: {
        key: 1,
        _id: 0,
        createdAt: 1,
        totalCount: {
          $sum: "$counts"
        }
      }
    },
    {
      $match: {
        createdAt: {
          $gt: new Date(startDate),
          $lt: new Date(endDate)
        },
        totalCount: {
          $gt: parseInt(minCount),
          $lt: parseInt(maxCount)
        }
      }
    }
  ];
};
