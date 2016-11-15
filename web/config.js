/**
 * Created by john on 11/13/16.
 */
var config = {};

config.MONGODB_CONNECT_URL = "mongodb://<username>:<password>@<url:port>/</uri>";
config.JWT_SECRET = "<yoursecretkey>";
config.NEWYORKTIMES_API_KEY = "<yoursecretkey>";
config.NEWYORKTIMES_CATEGORIES = ["world", "national", "business", "technology"];
config.GLOBAL_STORIES_ID = "MASTER_STORIES_DO_NOT_DELETE";
config.MAX_SHARED_STORIES = 30;
config.MAX_COMMENTS = 30;
config.MAX_FILTERS = 5;
config.MAX_FILTER_STORIES = 15;

module.exports = config;