export const EventCodes =
{
    Leave: 1,
    JoinFinished: 2,
    Move: 3,
    Teleport: 4,
    ChangeEquipment: 5,
    HealthUpdate: 6,
    EnergyUpdate: 7,
    DamageShieldUpdate: 8,
    CraftingFocusUpdate: 9,
    ActiveSpellEffectsUpdate: 10,
    ResetCooldowns: 11,
    Attack: 12,
    CastStart: 13,
    ChannelingUpdate: 14,
    CastCancel: 15,
    CastTimeUpdate: 16,
    CastFinished: 17,
    CastSpell: 18,
    CastSpells: 19,
    CastHit: 20,
    CastHits: 21,
    StoredTargetsUpdate: 22,
    ChannelingEnded: 23,
    AttackBuilding: 24,
    InventoryPutItem: 25,
    InventoryDeleteItem: 26,
    InventoryState: 27,
    NewCharacter: 28,
    NewEquipmentItem: 29,
    NewSiegeBannerItem: 30,
    NewSimpleItem: 31,
    NewFurnitureItem: 32,
    NewKillTrophyItem: 33,
    NewJournalItem: 34,
    NewLaborerItem: 35,
    NewEquipmentItemLegendarySoul: 36,
    NewSimpleHarvestableObject: 37,
    NewSimpleHarvestableObjectList: 38,
    NewHarvestableObject: 39,
    NewTreasureDestinationObject: 40,
    TreasureDestinationObjectStatus: 41,
    CloseTreasureDestinationObject: 42,
    NewSilverObject: 43,
    NewBuilding: 44,
    HarvestableChangeState: 45,
    MobChangeState: 46,
    FactionBuildingInfo: 47,
    CraftBuildingInfo: 48,
    RepairBuildingInfo: 49,
    MeldBuildingInfo: 50,
    ConstructionSiteInfo: 51,
    PlayerBuildingInfo: 52,
    FarmBuildingInfo: 53,
    TutorialBuildingInfo: 54,
    LaborerObjectInfo: 55,
    LaborerObjectJobInfo: 56,
    MarketPlaceBuildingInfo: 57,
    HarvestStart: 58,
    HarvestCancel: 59,
    HarvestFinished: 60,
    TakeSilver: 61,
    ActionOnBuildingStart: 62,
    ActionOnBuildingCancel: 63,
    ActionOnBuildingFinished: 64,
    ItemRerollQualityFinished: 65,
    InstallResourceStart: 66,
    InstallResourceCancel: 67,
    InstallResourceFinished: 68,
    CraftItemFinished: 69,
    LogoutCancel: 70,
    ChatMessage: 71,
    ChatSay: 72,
    ChatWhisper: 73,
    ChatMuted: 74,
    PlayEmote: 75,
    StopEmote: 76,
    SystemMessage: 77,
    UtilityTextMessage: 78,
    UpdateMoney: 79,
    UpdateFame: 80,
    UpdateLearningPoints: 81,
    UpdateReSpecPoints: 82,
    UpdateCurrency: 83,
    UpdateFactionStanding: 84,
    UpdateMistCityStanding: 85,
    Respawn: 86,
    ServerDebugLog: 87,
    CharacterEquipmentChanged: 88,
    RegenerationHealthChanged: 89,
    RegenerationEnergyChanged: 90,
    RegenerationMountHealthChanged: 91,
    RegenerationCraftingChanged: 92,
    RegenerationHealthEnergyComboChanged: 93,
    RegenerationPlayerComboChanged: 94,
    DurabilityChanged: 95,
    NewLoot: 96,
    AttachItemContainer: 97,
    DetachItemContainer: 98,
    InvalidateItemContainer: 99,
    LockItemContainer: 100,
    GuildUpdate: 101,
    GuildPlayerUpdated: 102,
    InvitedToGuild: 103,
    GuildMemberWorldUpdate: 104,
    UpdateMatchDetails: 105,
    ObjectEvent: 106,
    NewMonolithObject: 107,
    MonolithHasBannersPlacedUpdate: 108,
    NewOrbObject: 109,
    NewCastleObject: 110,
    NewSpellEffectArea: 111,
    UpdateSpellEffectArea: 112,
    NewChainSpell: 113,
    UpdateChainSpell: 114,
    NewTreasureChest: 115,
    StartMatch: 116,
    StartArenaMatchInfos: 117,
    EndArenaMatch: 118,
    MatchUpdate: 119,
    ActiveMatchUpdate: 120,
    NewMob: 122,
    //DebugMobInfo: 122,
    DebugVariablesInfo: 123,    
    DebugReputationInfo: 124,
    DebugDiminishingReturnInfo: 125,
    DebugSmartClusterQueueInfo: 126,
    ClaimOrbStart: 127,
    ClaimOrbFinished: 128,
    ClaimOrbCancel: 129,
    OrbUpdate: 130,
    OrbClaimed: 131,
    OrbReset: 132,
    NewWarCampObject: 133,
    NewMatchLootChestObject: 134,
    NewArenaExit: 135,
    GuildMemberTerritoryUpdate: 136,
    InvitedMercenaryToMatch: 137,
    ClusterInfoUpdate: 138,
    ForcedMovement: 139,
    ForcedMovementCancel: 140,
    CharacterStats: 141,
    CharacterStatsKillHistory: 142,
    CharacterStatsDeathHistory: 143,
    GuildStats: 144,
    KillHistoryDetails: 145,
    FullAchievementInfo: 146,
    FinishedAchievement: 147,
    AchievementProgressInfo: 148,
    FullAchievementProgressInfo: 149,
    FullTrackedAchievementInfo: 150,
    FullAutoLearnAchievementInfo: 151,
    QuestGiverQuestOffered: 152,
    QuestGiverDebugInfo: 153,
    ConsoleEvent: 154,
    TimeSync: 155,
    ChangeAvatar: 156,
    ChangeMountSkin: 157,
    GameEvent: 158,
    KilledPlayer: 159,
    Died: 160,
    KnockedDown: 161,
    Unconcious: 162,
    MatchPlayerJoinedEvent: 163,
    MatchPlayerStatsEvent: 164,
    MatchPlayerStatsCompleteEvent: 165,
    MatchTimeLineEventEvent: 166,
    MatchPlayerMainGearStatsEvent: 167,
    MatchPlayerChangedAvatarEvent: 168,
    InvitationPlayerTrade: 169,
    PlayerTradeStart: 170,
    PlayerTradeCancel: 171,
    PlayerTradeUpdate: 172,
    PlayerTradeFinished: 173,
    PlayerTradeAcceptChange: 174,
    MiniMapPing: 175,
    MarketPlaceNotification: 176,
    DuellingChallengePlayer: 177,
    NewDuellingPost: 178,
    DuelStarted: 179,
    DuelEnded: 180,
    DuelDenied: 181,
    DuelRequestCanceled: 182,
    DuelLeftArea: 183,
    DuelReEnteredArea: 184,
    NewRealEstate: 185,
    MiniMapOwnedBuildingsPositions: 186,
    RealEstateListUpdate: 187,
    GuildLogoUpdate: 188,
    GuildLogoChanged: 189,
    PlaceableObjectPlace: 190,
    PlaceableObjectPlaceCancel: 191,
    FurnitureObjectBuffProviderInfo: 192,
    FurnitureObjectCheatProviderInfo: 193,
    FarmableObjectInfo: 194,
    NewUnreadMails: 195,
    MailOperationPossible: 196,
    GuildLogoObjectUpdate: 197,
    StartLogout: 198,
    NewChatChannels: 199,
    JoinedChatChannel: 200,
    LeftChatChannel: 201,
    RemovedChatChannel: 202,
    AccessStatus: 203,
    Mounted: 204,
    MountStart: 205,
    MountCancel: 206,
    NewTravelpoint: 207,
    NewIslandAccessPoint: 208,
    NewExit: 209,
    UpdateHome: 210,
    UpdateChatSettings: 211,
    ResurrectionOffer: 212,
    ResurrectionReply: 213,
    LootEquipmentChanged: 214,
    UpdateUnlockedGuildLogos: 215,
    UpdateUnlockedAvatars: 216,
    UpdateUnlockedAvatarRings: 217,
    UpdateUnlockedBuildings: 218,
    NewIslandManagement: 219,
    NewTeleportStone: 220,
    Cloak: 221,
    PartyInvitation: 222,
    PartyJoinRequest: 223,
    PartyJoined: 224,
    PartyDisbanded: 225,
    PartyPlayerJoined: 226,
    PartyChangedOrder: 227,
    PartyPlayerLeft: 228,
    PartyLeaderChanged: 229,
    PartyLootSettingChangedPlayer: 230,
    PartySilverGained: 231,
    PartyPlayerUpdated: 232,
    PartyInvitationAnswer: 233,
    PartyJoinRequestAnswer: 234,
    PartyMarkedObjectsUpdated: 235,
    PartyOnClusterPartyJoined: 236,
    PartySetRoleFlag: 237,
    PartyInviteOrJoinPlayerEquipmentInfo: 238,
    SpellCooldownUpdate: 239,
    NewHellgateExitPortal: 240,
    NewExpeditionExit: 241,
    NewExpeditionNarrator: 242,
    ExitEnterStart: 243,
    ExitEnterCancel: 244,
    ExitEnterFinished: 245,
    NewQuestGiverObject: 246,
    FullQuestInfo: 247,
    QuestProgressInfo: 248,
    QuestGiverInfoForPlayer: 249,
    FullExpeditionInfo: 250,
    ExpeditionQuestProgressInfo: 251,
    InvitedToExpedition: 252,
    ExpeditionRegistrationInfo: 253,
    EnteringExpeditionStart: 254,
    EnteringExpeditionCancel: 255,
    RewardGranted: 256,
    ArenaRegistrationInfo: 257,
    EnteringArenaStart: 258,
    EnteringArenaCancel: 259,
    EnteringArenaLockStart: 260,
    EnteringArenaLockCancel: 261,
    InvitedToArenaMatch: 262,
    UsingHellgateShrine: 263,
    EnteringHellgateLockStart: 264,
    EnteringHellgateLockCancel: 265,
    PlayerCounts: 266,
    InCombatStateUpdate: 267,
    OtherGrabbedLoot: 268,
    TreasureChestUsingStart: 269,
    TreasureChestUsingFinished: 270,
    TreasureChestUsingCancel: 271,
    TreasureChestUsingOpeningComplete: 272,
    TreasureChestForceCloseInventory: 273,
    LocalTreasuresUpdate: 274,
    LootChestSpawnpointsUpdate: 275,
    PremiumChanged: 276,
    PremiumExtended: 277,
    PremiumLifeTimeRewardGained: 278,
    GoldPurchased: 279,
    LaborerGotUpgraded: 280,
    JournalGotFull: 281,
    JournalFillError: 282,
    FriendRequest: 283,
    FriendRequestInfos: 284,
    FriendInfos: 285,
    FriendRequestAnswered: 286,
    FriendOnlineStatus: 287,
    FriendRequestCanceled: 288,
    FriendRemoved: 289,
    FriendUpdated: 290,
    PartyLootItems: 291,
    PartyLootItemsRemoved: 292,
    ReputationUpdate: 293,
    DefenseUnitAttackBegin: 294,
    DefenseUnitAttackEnd: 295,
    DefenseUnitAttackDamage: 296,
    UnrestrictedPvpZoneUpdate: 297,
    ReputationImplicationUpdate: 298,
    NewMountObject: 299,
    MountHealthUpdate: 300,
    MountCooldownUpdate: 301,
    NewExpeditionAgent: 302,
    NewExpeditionCheckPoint: 303,
    ExpeditionStartEvent: 304,
    VoteEvent: 305,
    RatingEvent: 306,
    NewArenaAgent: 307,
    BoostFarmable: 308,
    UseFunction: 309,
    NewPortalEntrance: 310,
    NewPortalExit: 311,
    NewRandomDungeonExit: 312,
    WaitingQueueUpdate: 313,
    //PlayerMovementRateUpdate: 314,
    NewRandomDungeon: 314,
    ObserveStart: 315,
    MinimapZergs: 316,
    MinimapSmartClusterZergs: 317,
    PaymentTransactions: 318,
    PerformanceStatsUpdate: 319,
    OverloadModeUpdate: 320,
    DebugDrawEvent: 321,
    RecordCameraMove: 322,
    RecordStart: 323,
    DeliverCarriableObjectStart: 324,
    DeliverCarriableObjectCancel: 325,
    DeliverCarriableObjectReset: 326,
    DeliverCarriableObjectFinished: 327,
    TerritoryClaimStart: 328,
    TerritoryClaimCancel: 329,
    TerritoryClaimFinished: 330,
    TerritoryScheduleResult: 331,
    TerritoryUpgradeWithPowerCrystalResult: 332,
    ReceiveCarriableObjectStart: 333,
    ReceiveCarriableObjectFinished: 334,
    UpdateAccountState: 335,
    StartDeterministicRoam: 336,
    GuildFullAccessTagsUpdated: 337,
    GuildAccessTagUpdated: 338,
    GvgSeasonUpdate: 339,
    GvgSeasonCheatCommand: 340,
    SeasonPointsByKillingBooster: 341,
    FishingStart: 342,
    FishingCast: 343,
    FishingCatch: 344,
    FishingFinished: 345,
    FishingCancel: 346,
    NewFloatObject: 347,
    NewFishingZoneObject: 348,
    FishingMiniGame: 349,
    NewFishingZoneObject: 350,
    //AlbionJournalAchievementCompleted: 350,
    UpdatePuppet: 351,
    ChangeFlaggingFinished: 352,
    NewOutpostObject: 353,
    OutpostUpdate: 354,
    OutpostClaimed: 355,
    OverChargeEnd: 356,
    OverChargeStatus: 357,
    PartyFinderFullUpdate: 358,
    PartyFinderUpdate: 359,
    PartyFinderApplicantsUpdate: 360,
    PartyFinderEquipmentSnapshot: 361,
    PartyFinderJoinRequestDeclined: 362,
    NewUnlockedPersonalSeasonRewards: 363,
    PersonalSeasonPointsGained: 364,
    PersonalSeasonPastSeasonDataEvent: 365,
    EasyAntiCheatMessageToClient: 366,
    MatchLootChestOpeningStart: 367,
    MatchLootChestOpeningFinished: 368,
    MatchLootChestOpeningCancel: 369,
    NotifyCrystalMatchReward: 370,
    CrystalRealmFeedback: 371,
    NewLocationMarker: 372,
    NewTutorialBlocker: 373,
    NewTileSwitch: 374,
    NewInformationProvider: 375,
    NewDynamicGuildLogo: 376,
    NewDecoration: 377,
    TutorialUpdate: 378,
    TriggerHintBox: 379,
    RandomDungeonPositionInfo: 380,
    NewLootChest: 381,
    UpdateLootChest: 382,
    LootChestOpened: 383,
    UpdateLootProtectedByMobsWithMinimapDisplay: 384,
    NewShrine: 385,
    UpdateShrine: 386,
    UpdateRoom: 387,
    NewMistDungeonRoomMobSoul: 388,
    NewHellgateShrine: 389,
    UpdateHellgateShrine: 390,
    ActivateHellgateExit: 391,
    MutePlayerUpdate: 392,
    ShopTileUpdate: 393,
    ShopUpdate: 394,
    AntiCheatKick: 395,
    BattlEyeServerMessage: 396,
    UnlockVanityUnlock: 397,
    AvatarUnlocked: 398,
    CustomizationChanged: 399,
    BaseVaultInfo: 400,
    GuildVaultInfo: 401,
    BankVaultInfo: 402,
    RecoveryVaultPlayerInfo: 403,
    RecoveryVaultGuildInfo: 404,
    UpdateWardrobe: 405,
    CastlePhaseChanged: 406,
    GuildAccountLogEvent: 407,
    NewHideoutObject: 408,
    NewHideoutManagement: 409,
    NewHideoutExit: 410,
    InitHideoutAttackStart: 411,
    InitHideoutAttackCancel: 412,
    InitHideoutAttackFinished: 413,
    HideoutManagementUpdate: 414,
    HideoutUpgradeWithPowerCrystalResult: 415,
    IpChanged: 416,
    SmartClusterQueueUpdateInfo: 417,
    SmartClusterQueueActiveInfo: 418,
    SmartClusterQueueKickWarning: 419,
    SmartClusterQueueInvite: 420,
    ReceivedGvgSeasonPoints: 421,
    TowerPowerPointUpdate: 422,
    OpenWorldAttackScheduleStart: 423,
    OpenWorldAttackScheduleFinished: 424,
    OpenWorldAttackScheduleCancel: 425,
    OpenWorldAttackConquerStart: 426,
    OpenWorldAttackConquerFinished: 427,
    OpenWorldAttackConquerCancel: 428,
    OpenWorldAttackConquerStatus: 429,
    OpenWorldAttackStart: 430,
    OpenWorldAttackEnd: 431,
    NewRandomResourceBlocker: 432,
    NewHomeObject: 433,
    HideoutObjectUpdate: 434,
    UpdateInfamy: 435,
    MinimapPositionMarkers: 436,
    NewTunnelExit: 437,
    CorruptedDungeonUpdate: 438,
    CorruptedDungeonStatus: 439,
    CorruptedDungeonInfamy: 440,
    HellgateRestrictedAreaUpdate: 441,
    HellgateInfamy: 442,
    HellgateStatus: 443,
    HellgateStatusUpdate: 444,
    HellgateSuspense: 445,
    ReplaceSpellSlotWithMultiSpell: 446,
    NewCorruptedShrine: 447,
    UpdateCorruptedShrine: 448,
    CorruptedShrineUsageStart: 449,
    CorruptedShrineUsageCancel: 450,
    ExitUsed: 451,
    LinkedToObject: 452,
    LinkToObjectBroken: 453,
    EstimatedMarketValueUpdate: 454,
    StuckCancel: 455,
    DungonEscapeReady: 456,
    FactionWarfareClusterState: 457,
    FactionWarfareHasUnclaimedWeeklyReportsEvent: 458,
    SimpleFeedback: 459,
    SmartClusterQueueSkipClusterError: 460,
    XignCodeEvent: 461,
    BatchUseItemStart: 462,
    BatchUseItemEnd: 463,
    RedZoneEventClusterStatus: 464,
    RedZonePlayerNotification: 465,
    RedZoneWorldEvent: 466,
    FactionWarfareStats: 467,
    UpdateFactionBalanceFactors: 468,
    FactionEnlistmentChanged: 469,
    UpdateFactionRank: 470,
    FactionWarfareCampaignRewardsUnlocked: 471,
    FeaturedFeatureUpdate: 472,
    NewCarriableObject: 473,
    MinimapCrystalPositionMarker: 474,
    CarriedObjectUpdate: 475,
    PickupCarriableObjectStart: 476,
    PickupCarriableObjectCancel: 477,
    PickupCarriableObjectFinished: 478,
    DoSimpleActionStart: 479,
    DoSimpleActionCancel: 480,
    DoSimpleActionFinished: 481,
    NotifyGuestAccountVerified: 482,
    MightAndFavorReceivedEvent: 483,
    WeeklyPvpChallengeRewardStateUpdate: 484,
    NewUnlockedPvpSeasonChallengeRewards: 485,
    StaticDungeonEntrancesDungeonEventStatusUpdates: 486,
    StaticDungeonDungeonValueUpdate: 487,
    StaticDungeonEntranceDungeonEventsAborted: 488,
    InAppPurchaseConfirmedGooglePlay: 489,
    FeatureSwitchInfo: 490,
    PartyJoinRequestAborted: 491,
    PartyInviteAborted: 492,
    PartyStartHuntRequest: 493,
    PartyStartHuntRequested: 494,
    PartyStartHuntRequestAnswer: 495,
    GuildInviteDeclined: 496,
    CancelMultiSpellSlots: 497,
    NewVisualEventObject: 498,
    CastleClaimProgress: 499,
    CastleClaimProgressLogo: 500,
    TownPortalUpdateState: 501,
    TownPortalFailed: 502,
    ConsumableVanityChargesAdded: 503,
    FestivitiesUpdate: 504,
    NewBannerObject: 505,
    NewMistsImmediateReturnExit: 506,
    MistsPlayerJoinedInfo: 507,
    NewMistsStaticEntrance: 508,
    NewMistsOpenWorldExit: 509,
    NewTunnelExitTemp: 510,
    NewMistsWispSpawn: 511,
    MistsWispSpawnStateChange: 512,
    NewMistsCityEntrance: 513,
    NewMistsCityRoadsEntrance: 514,
    MistsCityRoadsEntrancePartyStateUpdate: 515,
    MistsCityRoadsEntranceClearStateForParty: 516,
    MistsEntranceDataChanged: 517,
    NewMistsCagedWisp: 518,
    MistsWispCageOpened: 519,
    MistsEntrancePartyBindingCreated: 520,
    MistsEntrancePartyBindingCleared: 521,
    MistsEntrancePartyBindingInfos: 522,
    NewMistsBorderExit: 523,
    NewMistsDungeonExit: 524,
    LocalQuestInfos: 525,
    LocalQuestStarted: 526,
    LocalQuestActive: 527,
    LocalQuestInactive: 528,
    LocalQuestProgressUpdate: 529,
    NewUnrestrictedPvpZone: 530,
    TemporaryFlaggingStatusUpdate: 531,
    SpellTestPerformanceUpdate: 532,
    Transformation: 533,
    TransformationEnd: 534,
    UpdateTrustlevel: 535,
    RevealHiddenTimeStamps: 536,
    ModifyItemTraitFinished: 537,
    RerollItemTraitValueFinished: 538,
    HuntQuestProgressInfo: 539,
    HuntStarted: 540,
    HuntFinished: 541,
    HuntAborted: 542,
    HuntMissionStepStateUpdate: 543,
    NewHuntTrack: 544,
    HuntMissionUpdate: 545,
    HuntQuestMissionProgressUpdate: 546,
    HuntTrackUsed: 547,
    HuntTrackUseableAgain: 548,
    MinimapHuntTrackMarkers: 549,
    NoTracksFound: 550,
    HuntQuestAborted: 551,
    InteractWithTrackStart: 552,
    InteractWithTrackCancel: 553,
    InteractWithTrackFinished: 554,
    NewDynamicCompound: 555,
    LegendaryItemDestroyed: 556,
    AttunementInfo: 557,
    TerritoryClaimRaidedRawEnergyCrystalResult: 558,
    CarriedObjectExpiryWarning: 559,
    CarriedObjectExpired: 560,
    TerritoryRaidStart: 561,
    TerritoryRaidCancel: 562,
    TerritoryRaidFinished: 563,
    TerritoryRaidResult: 564,
    TerritoryMonolithActiveRaidStatus: 565,
    TerritoryMonolithActiveRaidCancelled: 566,
    MonolithEnergyStorageUpdate: 567,
    MonolithNextScheduledOpenWorldAttackUpdate: 568,
    MonolithProtectedBuildingsDamageReductionUpdate: 569,
    NewBuildingBaseEvent: 570,
    NewFortificationBuilding: 571,
    NewCastleGateBuilding: 572,
    BuildingDurabilityUpdate: 573,
    MonolithFortificationPointsUpdate: 574,
    FortificationBuildingUpgradeInfo: 575,
    FortificationBuildingsDamageStateUpdate: 576,
    SiegeNotificationEvent: 577,
    UpdateEnemyWarBannerActive: 578,
    TerritoryAnnouncePlayerEjection: 579,
    CastleGateSwitchUseStarted: 580,
    CastleGateSwitchUseFinished: 581,
    FortificationBuildingWillDowngrade: 582,
    BotCommand: 583,
}