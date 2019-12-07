module.exports = {
	"*.js": ["npm test -- --watchAll=false --findRelatedTests", "npm run lint:fix", "git add"]
}
