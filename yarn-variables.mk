# replace the below feilds with values corresponding with your project
ifdef CI
	# Pipeline
	ifdef CI_COMMIT_TAG
		# Production
		REACT_APP_API_URI = api_url
		REACT_APP_BACKEND_URI = backend_uri
		REACT_APP_VERSION = ${CI_COMMIT_TAG}
	else
		# Staging
		REACT_APP_API_URI = api_url
		REACT_APP_BACKEND_URI = backend_uri
		REACT_APP_VERSION = ${CI_COMMIT_SHA}
	endif
else
	# Local
	REACT_APP_API_URI = http://localhost:5000
	REACT_APP_BACKEND_URI = backend_uri
	REACT_APP_VERSION = latest
endif
