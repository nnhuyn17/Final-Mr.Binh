module.exports = (sequelize, DataTypes) => {
  const MeetingRequest = sequelize.define("meeting_requests", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "account",
        key: "id"
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time_range: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['9am-11am', '1pm-3pm', '3pm-5pm', '5pm-7pm', '7pm-9pm']]
      }
    },
    content: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending'
    }
  });

  return MeetingRequest;
};
