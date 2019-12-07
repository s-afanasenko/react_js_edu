module.exports = {
	"hooks": {
    	"pre-commit": "lint-staged", /* npm run pre-commit */
    	"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  	}
}
