'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  try {
    // Read the package.json
    const pkgPath = path.resolve(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath));

    // Default `strapi` value
    pkg.strapi = pkg.strapi || {};

    // If the `strapi.uuid is missing`, we add it in the package.json
    if (!pkg.strapi.uuid) {
      // Set the `uuid` value
      pkg.strapi.uuid = `${uuid()}-heroku`;

      // Overwrite the file
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

      // Set value in config
      strapi.config.uuid = pkg.strapi.uuid;
    }
  } catch (err) {
    // Silent
  }

  cb();
};
