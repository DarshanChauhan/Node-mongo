module.exports = (mongoose) => {
  const xyz = mongoose.model(
    "xyz",
    mongoose.Schema(
      {
        title: String,
        description: String,
        publishedDate: Date,
      },
      { timestamps: true }
    )
  );

  return xyz;
};
