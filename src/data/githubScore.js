import Star from '@/assets/github/Star.astro'
import Commit from '@/assets/github/Commit.astro'
import PullRequest from '@/assets/github/PullRequest.astro'
import Issue from '@/assets/github/Issue.astro'
import Contribution from '@/assets/github/Contribution.astro'
import Trophy from '@/assets/github/Trophy.astro'
import Repository from '@/assets/github/Repository.astro'

export const githubScore = [
  {
    option: 'levelRank',
    tagId: 'level-rank-icon',
    value: '',
    icon: Trophy,
    show: true,
  },
  {
    option: 'repositories',
    tagId: '-',
    value: '',
    icon: Repository,
    show: true,
  },
  {
    option: 'stars',
    tagId: 'stars',
    value: '',
    icon: Star,
    show: true,
  },
  {
    option: 'commits',
    tagId: 'commits',
    value: '',
    icon: Commit,
    show: true,
  },
  {
    option: 'pullRequests',
    tagId: 'prs',
    value: '',
    icon: PullRequest,
    show: true,
  },
  {
    option: 'issues',
    tagId: 'issues',
    value: '',
    icon: Issue,
    show: false,
  },
  {
    option: 'contributions',
    tagId: 'contribs',
    value: '',
    icon: Contribution,
    show: false,
  },
]
