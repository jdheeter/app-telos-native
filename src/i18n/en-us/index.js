export default {
  common: {
    appName: "Telos Communities",
    buttons: {
      reset: "reset",
      ok: "OK",
      cancel: "Cancel",
      continue: "Continue",
      create: "Create",
      logout: "Logout",
      mint: "Mint",
      register: "Register",
      save: "Save",
      confirm: "Confirm",
      editProfile: "Edit profile",
    },
    defaultTitle: "Title",
  },
  components: {
    notifications: {
      linkTip: "Display on block explorer",
    },
  },
  forms: {
    errors: {
      accountFormat:
        "The account can contain lowercase characters only, numbers from 1 to 5 or a dot (.)",
      accountFormatBasic:
        "The account must contain 12 lowercase characters only and number from 1 to 5",
      accountLength: "The account must contain at most 12 characters",
      accountNotAvailable: 'The account "{account}" already exists',
      accountNotExists: 'The account "{account}" does not exist',
      copyKey: "Copy the key to a safe place",
      dateFuture: "The date must be in the future",
      greaterOrEqualThan: "The value must be greater than or equal to {value}",
      lowerOrEqualThan: "The value must be lower than or equal to {value}",
      integer: "Please type an integer",
      natural: "Please type a natural number (>=0)",
      phoneFormat: "Please type a valid phone",
      positiveInteger: "The value must be greater than 0",
      required: "This field is required",
      atLeast: "You need at least {what}",
      unique: "Repeated values are not allowed",
      token: "The field must contain between 2 and 6 characters",
      tokenDecimals: "The decimals must be between 2 and 9",
    },
    hints: {
      selectCountrie: "Please select your country",
      pressToAddHobbie: "Press enter to add a tag",
      pressToAddURL: "Press enter to add a URL",
    },
  },
  menu: {
    trails: "Voting",
    trailsBallots: "Decide",
    amendBallots: "Amend Ballots",
    TFElection: "TF Election",
    polls: "Polls",
    daos: "DAOs",
    elections: "Elections",
    proposals: "Proposals",
    workerProposals: "Worker proposals",
    tokens: "Tokens",
    trailsTreasuries: "DAOs",
    profiles: "Profiles",
    contacts: "Contacts",
    myProfile: "My profile",
    chats: "Chats",
    registerApp: "Register App",
    appList: "My Apps",
    authorizedApps: "Authorized apps",
    developer: "Developer",
    advanced: "Advanced",
  },
  notifications: {
    title: "Transactions",
    tokens: {
      setmeta: "Set token info",
      issue: "Issue tokens",
      retire: "Retire tokens",
      create: "Create a token",
      transfer: "Transfer tokens",
    },
    trails: {
      noBallot: "Ballot not found",
      addBallot: "Create a ballot",
      addTreasury: "Create a DAO",
      castVote: "Cast a vote",
      editTreasury: "Edit a DAO",
      mintTokens: "Mint tokens",
      registerVoter: "Register as a voter",
      errorSigning: "Error signing transaction",
      successSigning: "Success signing transaction",
      deleteBallot: "Delete ballot",
      endBallot: "End ballot",
      cancelBallot: "Cancel ballot",
    },
    poc: {
      lockSafe: "Lock safe",
      unlockSafe: "Unlock safe",
    },
  },
  lists: {
    empty: {
      countries: "No countries",
    },
  },
  pages: {
    accounts: {
      add: {
        buttons: {
          continue: "Continue",
          goToProfile: "Take me to my profile",
          signIn: "Sign in",
          verify: "Verify Phone Number",
          genKeys: "Generate Keys",
        },
        congratulationsTitle: "Congratulations",
        congratulationsSubtitle: "Your account {account} has been created",
        createAccountHint: "A verification code will be sent",
        createAccountTitle: "Create an Account",
        forms: {
          account: "Account name",
          accountHint: "12 characters, alphanumeric a-z, 1-5",
          phoneCode: "Code",
          smsNumber: "Phone number",
          verificationCode: "Verification code",
        },
        keyCopyClipboard: "Key copied to clipboard",
        saveKeys:
          "Save your keys somewhere safe. They will not be stored for you.",
        title: "Signup",
        verifyAccountGeneratingKey: "Generating key pairs",
        verifyAccountHint: "Copy both keys to a safe place before continuing",
        verifyOTPTitle: "Here are your keys:",
      },
    },
    trails: {
      ballots: {
        stakeBeforeVoting: "Stake before voting",
        needPositiveVote: "You need voting power",
        stakeBeforeVotingLong:
          "You must have TLOS staked for CPU and/or NET before voting on this ballot",
        needPositiveVoteLong: {
          liquid:
            "You must have have non-zero balance for this token before voting on this ballot",
          stake:
            "You need to aquire and stake any amount of this token before voting on this ballot.",
          both: "You need any amount of liquid or staked tokens before voting on this ballot.",
        },
        joinDAO: "Join DAO",
        joinAndVote: "Join DAO & Vote",
        vote: "Vote",
        ends: "Ends",
        end: "End",
        starts: "Starts",
        delete: "Delete",
        requestAmount: "request amount",
        openBallotHeader: "Open this ballot for voting",
        openBallot: "Open for voting",
        notOpened: "not open yet",
        welcomeCard: {
          title: "Hi, ",
          textBeginning: "Welcome to the ",
          textBold: "Telos DAO and Proposals portal",
          textEnd:
            ". This is the place where you can influence the development " +
            "of the Telos blockchain. Your voice matters!",
          btnLabel: "OK, got it",
        },
        actionBar: {
          sorting: "Sort by",
          filterTitle: "Filter",
          typeFilter: "Type",
          statusFilter: "Status",
          groupFilter: "DAO",
          typeOptions: {
            referendum: "Referendum",
            poll: "Poll",
            proposal: "Proposal",
          },
          statusOptions: {
            action: "Action",
            notStarted: "Not started",
            expired: "Expired",
            closed: "Closed",
            cancelled: "Cancelled",
            archived: "Archived",
            setup: "Setup",
          },
          btnApply: "Apply",
          btnDiscard: "Discard",
          btnDiscardAll: "Discard all filters",
          btnConfirm: "Confirm",
          btnCreatePoll: "Create a poll",
          btnCreateProposal: "Create a Proposal",
          btnCreateaDAO: "Create a DAO",
        },
      },
      treasuries: {
        settings: {
          burnable: "If enabled, the token manager can burn their own token",
          maxmutable:
            "If enabled, the token manager can change token max supply",
          reclaimable:
            "If enabled, the token manager can take away tokens from any user without extra permission",
          stakeable: "Enable this feature to allow users to stake their tokens",
          transferable:
            "Enable this feature to allow users to transfer their tokens." +
            "Consider that this is the primary feature," +
            "do not disable this feature unless you know what you are doing",
          unstakeable:
            "If enabled, users who have staked their tokens can not unstake them anymore",
        },
        card: {
          maxSupply: "Max supply",
          openedBallots: "Opened decisions",
          supply: "Supply",
          registered: "Registered",
          registerVoter: "Register as a voter",
        },
        registerVoterDialog: {
          title: "Do you want to register to this DAO?",
        },
      },
    },
    index: {
      buttons: {
        createAccount: "Create account",
        login: "Login",
      },
      router: {
        chat: "Chat",
        signUp: "Sign Up",
        chatList: "Chat List",
        contactList: "Contact List",
        registerApp: "Register App",
        appList: "App List",
      },
    },
    signUp: {
      form: {
        avatar: "Avatar URL",
        presentation: "Bio",
        name: "Name",
        status: "Status",
        firstName: "First Name",
        lastName: "Last Name",
        preferMethodComm: "Preferred method of communication",
        sms: "SMS Number",
        email: "Email",
        currentSms: "Current SMS Number",
        currentEmail: "Current Email",
        timeZone: "Time Zone",
        tags: "Tags",
        btnSave: "Save",
        newCustomFieldName: "Write the name of new custom field",
        editCustomFieldName: "Write the new field name",
        addCustomField: "Add custom field",
      },
    },
    general: {
      search: "Search",
      name: "Name",
      eosAccount: "eosAccount",
      domain: "Domain",
      defaultChatList: "There are no chats yet",
      defaultMessageList: "There are no messages yet",
      defaultContactList: "There are no contacts yet",
      defaultAppList: "There are no apps yet",
      noAccountsFound: "No accounts found",
      confirmActions: "Do you want confirm this action?",
      private: "Private",
      public: "Public",
    },
    registerApp: {
      form: {
        urlBase: "URL",
        urlImage: "Image URL",
        name: "Name",
        appId: "AppId",
        shortName: "Short Name",
        ownerAccount: "Owner Account",
        confirmDeleteApp: "Do you want to delete this app?",
        confirmEnableApp: "Do you want to enable the OAuth of this app?",
        confirmDisableApp: "Do you want to disable the OAuth of this app?",
        confirmRevokeAccessApp:
          "Do you want to revoke OAuth access of this app?",
        urlRedirection: "URL Redirection",
        appType: "App Type",
        revokeAccess: "Revoke access",
        secret: "Secret",
      },
    },
    login: {
      getApp: "Download the app",
      title: "Select your wallet",
      selectAccount: "Please select an account",
    },
    testnetRotation: {
      title: "Add your testnet BP to the schedule",
    },
    testnetDevelopers: {
      title: "Get a testnet account or testnet TLOS",
    },
    tokens: {
      title: "Token management",
    },
    validators: {
      title: "Validators",
    },
    claim: {
      claimAccount: "Claim account",
      claimCheck: {
        title: "Check if your account has been claimed",
        checkButton: "Check account",
      },
      removeMe: {
        title:
          "Claim your account by removing it from the unclaimed account list",
      },
    },
    poc: {
      smartsafe: {
        title: "SmartSafe POC",
        last_unlocker: "Last unlocked by",
        last_unlock_time: "Last unlocked",
        lock: "Lock",
        unlock: "Unlock",
        locked_by: "Locked by",
        lock_time: "Locked at",
      },
    },
    verifyProfile: {
      verifySMS: "Verify SMS",
      codeSMS: "Verification code",
      verifyEMAIL: "Verify EMAIL",
      codeEMAIL: "Verification code",
    },
    profileLogin: {
      failed: "Unable to login to the profile service",
    },
  },
};
