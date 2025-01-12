export const EventCodes =
{
    Leave: 1,
    JoinFinished: 2,
    Move: 3,
    Teleport: 4,
    ChangeEquipment: 5,
    HealthUpdate: 6,
    HealthUpdates: 7,
    EnergyUpdate: 8,
    DamageShieldUpdate: 9,
    CraftingFocusUpdate: 10,
    ActiveSpellEffectsUpdate: 11,
    ResetCooldowns: 12,
    Attack: 13,
    CastStart: 14,
    ChannelingUpdate: 15,
    CastCancel: 16,
    CastTimeUpdate: 17,
    CastFinished: 18,
    CastSpell: 19,
    CastSpells: 20,
    CastHit: 21,
    CastHits: 22,
    StoredTargetsUpdate: 23,
    ChannelingEnded: 24,
    AttackBuilding: 25,
    InventoryPutItem: 26,
    InventoryDeleteItem: 27,
    InventoryState: 28,
    NewCharacter: 29,
    NewEquipmentItem: 30,
    NewSiegeBannerItem: 31,
    NewSimpleItem: 32,
    NewFurnitureItem: 33,
    NewKillTrophyItem: 34,
    NewJournalItem: 35,
    NewLaborerItem: 36,
    NewEquipmentItemLegendarySoul: 37,
    NewSimpleHarvestableObject: 38,
    NewSimpleHarvestableObjectList: 39,
    NewHarvestableObject: 40,
    NewTreasureDestinationObject: 41,
    TreasureDestinationObjectStatus: 42,
    CloseTreasureDestinationObject: 43,
    NewSilverObject: 44,
    NewBuilding: 45,
    HarvestableChangeState: 46,
    MobChangeState: 47,
    FactionBuildingInfo: 48,
    CraftBuildingInfo: 49,
    RepairBuildingInfo: 50,
    MeldBuildingInfo: 51,
    ConstructionSiteInfo: 52,
    PlayerBuildingInfo: 53,
    FarmBuildingInfo: 54,
    TutorialBuildingInfo: 55,
    LaborerObjectInfo: 56,
    LaborerObjectJobInfo: 57,
    MarketPlaceBuildingInfo: 58,
    HarvestStart: 59,
    HarvestCancel: 60,
    HarvestFinished: 61,
    TakeSilver: 62,
    RemoveSilver: 63,
    ActionOnBuildingStart: 64,
    ActionOnBuildingCancel: 65,
    ActionOnBuildingFinished: 66,
    ItemRerollQualityFinished: 67,
    InstallResourceStart: 68,
    InstallResourceCancel: 69,
    InstallResourceFinished: 70,
    CraftItemFinished: 71,
    LogoutCancel: 72,
    ChatMessage: 73,
    ChatSay: 74,
    ChatWhisper: 75,
    ChatMuted: 76,
    PlayEmote: 77,
    StopEmote: 78,
    SystemMessage: 79,
    UtilityTextMessage: 80,
    UpdateMoney: 81,
    UpdateFame: 82,
    UpdateLearningPoints: 83,
    UpdateReSpecPoints: 84,
    UpdateCurrency: 85,
    UpdateFactionStanding: 86,
    UpdateMistCityStanding: 87,
    Respawn: 88,
    ServerDebugLog: 89,
    CharacterEquipmentChanged: 90,
    RegenerationHealthChanged: 91,
    RegenerationEnergyChanged: 92,
    RegenerationMountHealthChanged: 93,
    RegenerationCraftingChanged: 94,
    RegenerationHealthEnergyComboChanged: 95,
    RegenerationPlayerComboChanged: 96,
    DurabilityChanged: 97,
    NewLoot: 98,
    AttachItemContainer: 99,
    DetachItemContainer: 100,
    InvalidateItemContainer: 101,
    LockItemContainer: 102,
    GuildUpdate: 103,
    GuildPlayerUpdated: 104,
    InvitedToGuild: 105,
    GuildMemberWorldUpdate: 106,
    UpdateMatchDetails: 107,
    ObjectEvent: 108,
    NewMonolithObject: 109,
    MonolithHasBannersPlacedUpdate: 110,
    NewOrbObject: 111,
    NewCastleObject: 112,
    NewSpellEffectArea: 113,
    UpdateSpellEffectArea: 114,
    NewChainSpell: 115,
    UpdateChainSpell: 116,
    NewTreasureChest: 117,
    StartMatch: 118,
    StartArenaMatchInfos: 119,
    EndArenaMatch: 120,
    MatchUpdate: 121,
    ActiveMatchUpdate: 122,
    NewMob: 123,
    DebugMobInfo: 124,
    DebugVariablesInfo: 125,
    DebugReputationInfo: 126,
    DebugDiminishingReturnInfo: 127,
    DebugSmartClusterQueueInfo: 128,
    ClaimOrbStart: 129,
    ClaimOrbFinished: 130,
    ClaimOrbCancel: 131,
    OrbUpdate: 132,
    OrbClaimed: 133,
    OrbReset: 134,
    NewWarCampObject: 135,
    NewMatchLootChestObject: 136,
    NewArenaExit: 137,
    GuildMemberTerritoryUpdate: 138,
    InvitedMercenaryToMatch: 139,
    ClusterInfoUpdate: 140,
    ForcedMovement: 141,
    ForcedMovementCancel: 142,
    CharacterStats: 143,
    CharacterStatsKillHistory: 144,
    CharacterStatsDeathHistory: 145,
    GuildStats: 146,
    KillHistoryDetails: 147,
    FullAchievementInfo: 148,
    FinishedAchievement: 149,
    AchievementProgressInfo: 150,
    FullAchievementProgressInfo: 151,
    FullTrackedAchievementInfo: 152,
    FullAutoLearnAchievementInfo: 153,
    QuestGiverQuestOffered: 154,
    QuestGiverDebugInfo: 155,
    ConsoleEvent: 156,
    TimeSync: 157,
    ChangeAvatar: 158,
    ChangeMountSkin: 159,
    GameEvent: 160,
    KilledPlayer: 161,
    Died: 162,
    KnockedDown: 163,
    Unconcious: 164,
    MatchPlayerJoinedEvent: 165,
    MatchPlayerStatsEvent: 166,
    MatchPlayerStatsCompleteEvent: 167,
    MatchTimeLineEventEvent: 168,
    MatchPlayerMainGearStatsEvent: 169,
    MatchPlayerChangedAvatarEvent: 170,
    InvitationPlayerTrade: 171,
    PlayerTradeStart: 172,
    PlayerTradeCancel: 173,
    PlayerTradeUpdate: 174,
    PlayerTradeFinished: 175,
    PlayerTradeAcceptChange: 176,
    MiniMapPing: 177,
    MarketPlaceNotification: 178,
    DuellingChallengePlayer: 179,
    NewDuellingPost: 180,
    DuelStarted: 181,
    DuelEnded: 182,
    DuelDenied: 183,
    DuelRequestCanceled: 184,
    DuelLeftArea: 185,
    DuelReEnteredArea: 186,
    NewRealEstate: 187,
    MiniMapOwnedBuildingsPositions: 188,
    RealEstateListUpdate: 189,
    GuildLogoUpdate: 190,
    GuildLogoChanged: 191,
    PlaceableObjectPlace: 192,
    PlaceableObjectPlaceCancel: 193,
    FurnitureObjectBuffProviderInfo: 194,
    FurnitureObjectCheatProviderInfo: 195,
    FarmableObjectInfo: 196,
    NewUnreadMails: 197,
    MailOperationPossible: 198,
    GuildLogoObjectUpdate: 199,
    StartLogout: 200,
    NewChatChannels: 201,
    JoinedChatChannel: 202,
    LeftChatChannel: 203,
    RemovedChatChannel: 204,
    AccessStatus: 205,
    Mounted: 206,
    MountStart: 207,
    MountCancel: 208,
    NewTravelpoint: 209,
    NewIslandAccessPoint: 210,
    NewExit: 211,
    UpdateHome: 212,
    UpdateChatSettings: 213,
    ResurrectionOffer: 214,
    ResurrectionReply: 215,
    LootEquipmentChanged: 216,
    UpdateUnlockedGuildLogos: 217,
    UpdateUnlockedAvatars: 218,
    UpdateUnlockedAvatarRings: 219,
    UpdateUnlockedBuildings: 220,
    NewIslandManagement: 221,
    NewTeleportStone: 222,
    Cloak: 223,
    PartyInvitation: 224,
    PartyJoinRequest: 225,
    PartyJoined: 226,
    PartyDisbanded: 227,
    PartyPlayerJoined: 228,
    PartyChangedOrder: 229,
    PartyPlayerLeft: 230,
    PartyLeaderChanged: 231,
    PartyLootSettingChangedPlayer: 232,
    PartySilverGained: 233,
    PartyPlayerUpdated: 234,
    PartyInvitationAnswer: 235,
    PartyJoinRequestAnswer: 236,
    PartyMarkedObjectsUpdated: 237,
    PartyOnClusterPartyJoined: 238,
    PartySetRoleFlag: 239,
    PartyInviteOrJoinPlayerEquipmentInfo: 240,
    PartyReadyCheckUpdate: 241,
    SpellCooldownUpdate: 242,
    NewHellgateExitPortal: 243,
    NewExpeditionExit: 244,
    NewExpeditionNarrator: 245,
    ExitEnterStart: 246,
    ExitEnterCancel: 247,
    ExitEnterFinished: 248,
    NewQuestGiverObject: 249,
    FullQuestInfo: 250,
    QuestProgressInfo: 251,
    QuestGiverInfoForPlayer: 252,
    FullExpeditionInfo: 253,
    ExpeditionQuestProgressInfo: 254,
    InvitedToExpedition: 255,
    ExpeditionRegistrationInfo: 256,
    EnteringExpeditionStart: 257,
    EnteringExpeditionCancel: 258,
    RewardGranted: 259,
    ArenaRegistrationInfo: 260,
    EnteringArenaStart: 261,
    EnteringArenaCancel: 262,
    EnteringArenaLockStart: 263,
    EnteringArenaLockCancel: 264,
    InvitedToArenaMatch: 265,
    UsingHellgateShrine: 266,
    EnteringHellgateLockStart: 267,
    EnteringHellgateLockCancel: 268,
    PlayerCounts: 269,
    InCombatStateUpdate: 270,
    OtherGrabbedLoot: 271,
    TreasureChestUsingStart: 272,
    TreasureChestUsingFinished: 273,
    TreasureChestUsingCancel: 274,
    TreasureChestUsingOpeningComplete: 275,
    TreasureChestForceCloseInventory: 276,
    LocalTreasuresUpdate: 277,
    LootChestSpawnpointsUpdate: 278,
    PremiumChanged: 279,
    PremiumExtended: 280,
    PremiumLifeTimeRewardGained: 281,
    GoldPurchased: 282,
    LaborerGotUpgraded: 283,
    JournalGotFull: 284,
    JournalFillError: 285,
    FriendRequest: 286,
    FriendRequestInfos: 287,
    FriendInfos: 288,
    FriendRequestAnswered: 289,
    FriendOnlineStatus: 290,
    FriendRequestCanceled: 291,
    FriendRemoved: 292,
    FriendUpdated: 293,
    PartyLootItems: 294,
    PartyLootItemsRemoved: 295,
    ReputationUpdate: 296,
    DefenseUnitAttackBegin: 297,
    DefenseUnitAttackEnd: 298,
    DefenseUnitAttackDamage: 299,
    UnrestrictedPvpZoneUpdate: 300,
    ReputationImplicationUpdate: 301,
    NewMountObject: 302,
    MountHealthUpdate: 303,
    MountCooldownUpdate: 304,
    NewExpeditionAgent: 305,
    NewExpeditionCheckPoint: 306,
    ExpeditionStartEvent: 307,
    VoteEvent: 308,
    RatingEvent: 309,
    NewArenaAgent: 310,
    BoostFarmable: 311,
    UseFunction: 312,
    NewPortalEntrance: 313,
    NewPortalExit: 314,
    NewRandomDungeonExit: 315,
    WaitingQueueUpdate: 316,
    PlayerMovementRateUpdate: 317,
    ObserveStart: 318,
    MinimapZergs: 319,
    MinimapSmartClusterZergs: 320,
    PaymentTransactions: 321,
    PerformanceStatsUpdate: 322,
    OverloadModeUpdate: 323,
    DebugDrawEvent: 324,
    RecordCameraMove: 325,
    RecordStart: 326,
    DeliverCarriableObjectStart: 327,
    DeliverCarriableObjectCancel: 328,
    DeliverCarriableObjectReset: 329,
    DeliverCarriableObjectFinished: 330,
    TerritoryClaimStart: 331,
    TerritoryClaimCancel: 332,
    TerritoryClaimFinished: 333,
    TerritoryScheduleResult: 334,
    TerritoryUpgradeWithPowerCrystalResult: 335,
    ReceiveCarriableObjectStart: 336,
    ReceiveCarriableObjectFinished: 337,
    UpdateAccountState: 338,
    StartDeterministicRoam: 339,
    GuildFullAccessTagsUpdated: 340,
    GuildAccessTagUpdated: 341,
    GvgSeasonUpdate: 342,
    GvgSeasonCheatCommand: 343,
    SeasonPointsByKillingBooster: 344,
    FishingStart: 345,
    FishingCast: 346,
    FishingCatch: 347,
    FishingFinished: 348,
    FishingCancel: 349,
    NewFloatObject: 350,
    NewFishingZoneObject: 351,
    FishingMiniGame: 352,
    AlbionJournalAchievementCompleted: 353,
    UpdatePuppet: 354,
    ChangeFlaggingFinished: 355,
    NewOutpostObject: 356,
    OutpostUpdate: 357,
    OutpostClaimed: 358,
    OverChargeEnd: 359,
    OverChargeStatus: 360,
    PartyFinderFullUpdate: 361,
    PartyFinderUpdate: 362,
    PartyFinderApplicantsUpdate: 363,
    PartyFinderEquipmentSnapshot: 364,
    PartyFinderJoinRequestDeclined: 365,
    NewUnlockedPersonalSeasonRewards: 366,
    PersonalSeasonPointsGained: 367,
    PersonalSeasonPastSeasonDataEvent: 368,
    EasyAntiCheatMessageToClient: 369,
    MatchLootChestOpeningStart: 370,
    MatchLootChestOpeningFinished: 371,
    MatchLootChestOpeningCancel: 372,
    NotifyCrystalMatchReward: 373,
    CrystalRealmFeedback: 374,
    NewLocationMarker: 375,
    NewTutorialBlocker: 376,
    NewTileSwitch: 377,
    NewInformationProvider: 378,
    NewDynamicGuildLogo: 379,
    NewDecoration: 380,
    TutorialUpdate: 381,
    TriggerHintBox: 382,
    RandomDungeonPositionInfo: 383,
    NewLootChest: 384,
    UpdateLootChest: 385,
    LootChestOpened: 386,
    UpdateLootProtectedByMobsWithMinimapDisplay: 387,
    NewShrine: 388,
    UpdateShrine: 389,
    UpdateRoom: 390,
    NewMistDungeonRoomMobSoul: 391,
    NewHellgateShrine: 392,
    UpdateHellgateShrine: 393,
    ActivateHellgateExit: 394,
    MutePlayerUpdate: 395,
    ShopTileUpdate: 396,
    ShopUpdate: 397,
    AntiCheatKick: 398,
    BattlEyeServerMessage: 399,
    UnlockVanityUnlock: 400,
    AvatarUnlocked: 401,
    CustomizationChanged: 402,
    BaseVaultInfo: 403,
    GuildVaultInfo: 404,
    BankVaultInfo: 405,
    RecoveryVaultPlayerInfo: 406,
    RecoveryVaultGuildInfo: 407,
    UpdateWardrobe: 408,
    CastlePhaseChanged: 409,
    GuildAccountLogEvent: 410,
    NewHideoutObject: 411,
    NewHideoutManagement: 412,
    NewHideoutExit: 413,
    InitHideoutAttackStart: 414,
    InitHideoutAttackCancel: 415,
    InitHideoutAttackFinished: 416,
    HideoutManagementUpdate: 417,
    HideoutUpgradeWithPowerCrystalResult: 418,
    IpChanged: 419,
    SmartClusterQueueUpdateInfo: 420,
    SmartClusterQueueActiveInfo: 421,
    SmartClusterQueueKickWarning: 422,
    SmartClusterQueueInvite: 423,
    ReceivedGvgSeasonPoints: 424,
    TowerPowerPointUpdate: 425,
    OpenWorldAttackScheduleStart: 426,
    OpenWorldAttackScheduleFinished: 427,
    OpenWorldAttackScheduleCancel: 428,
    OpenWorldAttackConquerStart: 429,
    OpenWorldAttackConquerFinished: 430,
    OpenWorldAttackConquerCancel: 431,
    OpenWorldAttackConquerStatus: 432,
    OpenWorldAttackStart: 433,
    OpenWorldAttackEnd: 434,
    NewRandomResourceBlocker: 435,
    NewHomeObject: 436,
    HideoutObjectUpdate: 437,
    UpdateInfamy: 438,
    MinimapPositionMarkers: 439,
    NewTunnelExit: 440,
    CorruptedDungeonUpdate: 441,
    CorruptedDungeonStatus: 442,
    CorruptedDungeonInfamy: 443,
    HellgateRestrictedAreaUpdate: 444,
    HellgateInfamy: 445,
    HellgateStatus: 446,
    HellgateStatusUpdate: 447,
    HellgateSuspense: 448,
    ReplaceSpellSlotWithMultiSpell: 449,
    NewCorruptedShrine: 450,
    UpdateCorruptedShrine: 451,
    CorruptedShrineUsageStart: 452,
    CorruptedShrineUsageCancel: 453,
    ExitUsed: 454,
    LinkedToObject: 455,
    LinkToObjectBroken: 456,
    EstimatedMarketValueUpdate: 457,
    StuckCancel: 458,
    DungonEscapeReady: 459,
    FactionWarfareClusterState: 460,
    FactionWarfareHasUnclaimedWeeklyReportsEvent: 461,
    SimpleFeedback: 462,
    SmartClusterQueueSkipClusterError: 463,
    XignCodeEvent: 464,
    BatchUseItemStart: 465,
    BatchUseItemEnd: 466,
    RedZoneEventClusterStatus: 467,
    RedZonePlayerNotification: 468,
    RedZoneWorldEvent: 469,
    FactionWarfareStats: 470,
    UpdateFactionBalanceFactors: 471,
    FactionEnlistmentChanged: 472,
    UpdateFactionRank: 473,
    FactionWarfareCampaignRewardsUnlocked: 474,
    FeaturedFeatureUpdate: 475,
    NewCarriableObject: 476,
    MinimapCrystalPositionMarker: 477,
    CarriedObjectUpdate: 478,
    PickupCarriableObjectStart: 479,
    PickupCarriableObjectCancel: 480,
    PickupCarriableObjectFinished: 481,
    DoSimpleActionStart: 482,
    DoSimpleActionCancel: 483,
    DoSimpleActionFinished: 484,
    NotifyGuestAccountVerified: 485,
    MightAndFavorReceivedEvent: 486,
    WeeklyPvpChallengeRewardStateUpdate: 487,
    NewUnlockedPvpSeasonChallengeRewards: 488,
    StaticDungeonEntrancesDungeonEventStatusUpdates: 489,
    StaticDungeonDungeonValueUpdate: 490,
    StaticDungeonEntranceDungeonEventsAborted: 491,
    InAppPurchaseConfirmedGooglePlay: 492,
    FeatureSwitchInfo: 493,
    PartyJoinRequestAborted: 494,
    PartyInviteAborted: 495,
    PartyStartHuntRequest: 496,
    PartyStartHuntRequested: 497,
    PartyStartHuntRequestAnswer: 498,
    PartyPlayerLeaveScheduled: 499,
    GuildInviteDeclined: 500,
    CancelMultiSpellSlots: 501,
    NewVisualEventObject: 502,
    CastleClaimProgress: 503,
    CastleClaimProgressLogo: 504,
    TownPortalUpdateState: 505,
    TownPortalFailed: 506,
    ConsumableVanityChargesAdded: 507,
    FestivitiesUpdate: 508,
    NewBannerObject: 509,
    NewMistsImmediateReturnExit: 510,
    MistsPlayerJoinedInfo: 511,
    NewMistsStaticEntrance: 512,
    NewMistsOpenWorldExit: 513,
    NewTunnelExitTemp: 514,
    NewMistsWispSpawn: 515,
    MistsWispSpawnStateChange: 516,
    NewMistsCityEntrance: 517,
    NewMistsCityRoadsEntrance: 518,
    MistsCityRoadsEntrancePartyStateUpdate: 519,
    MistsCityRoadsEntranceClearStateForParty: 520,
    MistsEntranceDataChanged: 521,
    NewMistsCagedWisp: 522,
    MistsWispCageOpened: 523,
    MistsEntrancePartyBindingCreated: 524,
    MistsEntrancePartyBindingCleared: 525,
    MistsEntrancePartyBindingInfos: 526,
    NewMistsBorderExit: 527,
    NewMistsDungeonExit: 528,
    LocalQuestInfos: 529,
    LocalQuestStarted: 530,
    LocalQuestActive: 531,
    LocalQuestInactive: 532,
    LocalQuestProgressUpdate: 533,
    NewUnrestrictedPvpZone: 534,
    TemporaryFlaggingStatusUpdate: 535,
    SpellTestPerformanceUpdate: 536,
    Transformation: 537,
    TransformationEnd: 538,
    UpdateTrustlevel: 539,
    RevealHiddenTimeStamps: 540,
    ModifyItemTraitFinished: 541,
    RerollItemTraitValueFinished: 542,
    HuntQuestProgressInfo: 543,
    HuntStarted: 544,
    HuntFinished: 545,
    HuntAborted: 546,
    HuntMissionStepStateUpdate: 547,
    NewHuntTrack: 548,
    HuntMissionUpdate: 549,
    HuntQuestMissionProgressUpdate: 550,
    HuntTrackUsed: 551,
    HuntTrackUseableAgain: 552,
    MinimapHuntTrackMarkers: 553,
    NoTracksFound: 554,
    HuntQuestAborted: 555,
    InteractWithTrackStart: 556,
    InteractWithTrackCancel: 557,
    InteractWithTrackFinished: 558,
    NewDynamicCompound: 559,
    LegendaryItemDestroyed: 560,
    AttunementInfo: 561,
    TerritoryClaimRaidedRawEnergyCrystalResult: 562,
    CarriedObjectExpiryWarning: 563,
    CarriedObjectExpired: 564,
    TerritoryRaidStart: 565,
    TerritoryRaidCancel: 566,
    TerritoryRaidFinished: 567,
    TerritoryRaidResult: 568,
    TerritoryMonolithActiveRaidStatus: 569,
    TerritoryMonolithActiveRaidCancelled: 570,
    MonolithEnergyStorageUpdate: 571,
    MonolithNextScheduledOpenWorldAttackUpdate: 572,
    MonolithProtectedBuildingsDamageReductionUpdate: 573,
    NewBuildingBaseEvent: 574,
    NewFortificationBuilding: 575,
    NewCastleGateBuilding: 576,
    BuildingDurabilityUpdate: 577,
    MonolithFortificationPointsUpdate: 578,
    FortificationBuildingUpgradeInfo: 579,
    FortificationBuildingsDamageStateUpdate: 580,
    SiegeNotificationEvent: 581,
    UpdateEnemyWarBannerActive: 582,
    TerritoryAnnouncePlayerEjection: 583,
    CastleGateSwitchUseStarted: 584,
    CastleGateSwitchUseFinished: 585,
    FortificationBuildingWillDowngrade: 586,
    BotCommand: 587,
    JournalAchievementProgressUpdate: 588,
    JournalClaimableRewardUpdate: 589
}