const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  try {
    const json = await Cache(
      'https://beta.readng.co/api/users/profile/mxzhdwjg',
      {
        duration: '2h',
        type: 'json',
      }
    );
    return json;
  } catch (ex) {
    console.log(ex);

    return [];
  }
};