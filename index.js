// Load the datejs package
require("datejs");

// Function to combine multiple arrays of usernames
function combineUsers(...args) {

    // Object that will be returned
    const combinedObject = {
        users: []
    };

    // Go through each array of usernames
    for (const usernames of args) {

        // Merge the current array into the existing users array
        combinedObject.users = [
            ...combinedObject.users,
            ...usernames
        ];
    }

    // Save today's date
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Return the completed object
    return combinedObject;
}

// Export the function
module.exports = combineUsers;



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};