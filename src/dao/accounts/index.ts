import { aliasAccount } from './aliasAccount'
import { chatAccount } from './chatAccount'
import { devProposalAccount } from './devProposalAccount'
import { devIssueAccount } from './devIssueAccount'
import { userAccount } from './userAccount'
import { issueAccount } from './issueAccount'
import { createDaoGlobalAccount } from './networkAccount'
import { nodeAccount } from './nodeAccount'
import { proposalAccount } from './proposalAccount'
import { Address } from 'ethereumjs-util'
import { ShardeumFlags } from '../../shardeum/shardeumFlags'

export const create = {
  aliasAccount,
  chatAccount,
  devIssueAccount,
  devProposalAccount,
  issueAccount,
  createDaoGlobalAccount,
  nodeAccount,
  proposalAccount,
  userAccount,
}