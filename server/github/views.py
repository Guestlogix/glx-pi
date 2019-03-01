
from flask import Blueprint, request
from github import Github
#from .models import PullRequest
#from .serializers import pull_request_schema

blueprint = Blueprint('github', __name__)

@blueprint.route('/github', methods=('GET',))
def github():
    g = Github("44d3128ef24baa07c73691d8cbf3798e1b637285")
    repo = g.get_repo("Guestlogix/traveler-ios")
    open_issues = repo.get_issues(state='open')
    for issue in open_issues:
        print(issue.labels)
    return 'ok'