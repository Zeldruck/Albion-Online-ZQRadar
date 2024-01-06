class MobsInfo{


    constructor()
    {
        this.moblist = {};
    }

    addItem(id, tier, type, loc)
    {
        if (!this.moblist[id])
        {
            this.moblist[id] = [];
        }
    
        this.moblist[id][0] = tier;
        this.moblist[id][1] = type;
        this.moblist[id][2] = loc;
    }

    initMobs()
    {
        //#region Hide
        /* Steppe biome */
        this.addItem(324, 1, EnemyType.LivingSkinnable, "hide"); // Marmot
        this.addItem(325, 2, EnemyType.LivingSkinnable, "hide"); // Impala
        this.addItem(326, 3, EnemyType.LivingSkinnable, "hide"); // Moabird
        this.addItem(327, 4, EnemyType.LivingSkinnable, "hide"); // Giant stag
        this.addItem(328, 5, EnemyType.LivingSkinnable, "hide"); // Terrorbird
        this.addItem(329, 6, EnemyType.LivingSkinnable, "hide"); // Hyena
        this.addItem(330, 7, EnemyType.LivingSkinnable, "hide"); // Rhino
        this.addItem(331, 7, EnemyType.LivingSkinnable, "hide"); // Bighorn Rhino
        this.addItem(332, 8, EnemyType.LivingSkinnable, "hide"); // Mammoth
        this.addItem(333, 8, EnemyType.LivingSkinnable, "hide"); // Ancient Mammoth
        this.addItem(413, 3, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(414, 5, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(415, 7, EnemyType.LivingSkinnable, "hide"); // Cougar

        /* Forest biome */
        this.addItem(296, 1, EnemyType.LivingSkinnable, "hide"); // Rabbit
        this.addItem(297, 2, EnemyType.LivingSkinnable, "hide"); // Fox
        this.addItem(299, 3, EnemyType.LivingSkinnable, "hide"); // Wolf
        this.addItem(300, 4, EnemyType.LivingSkinnable, "hide"); // Boar
        this.addItem(301, 5, EnemyType.LivingSkinnable, "hide"); // Bear
        this.addItem(302, 6, EnemyType.LivingSkinnable, "hide"); // Direwolf
        this.addItem(303, 6, EnemyType.LivingSkinnable, "hide"); // Giant Stag
        this.addItem(304, 7, EnemyType.LivingSkinnable, "hide"); // Direboar small
        this.addItem(305, 7, EnemyType.LivingSkinnable, "hide"); // Direboar
        this.addItem(306, 8, EnemyType.LivingSkinnable, "hide"); // Direbear small
        this.addItem(307, 8, EnemyType.LivingSkinnable, "hide"); // Direbear

        /* Swamp biome */
        this.addItem(313, 1, EnemyType.LivingSkinnable, "hide"); // Toad
        this.addItem(314, 2, EnemyType.LivingSkinnable, "hide"); // Snake
        this.addItem(315, 3, EnemyType.LivingSkinnable, "hide"); // Giant toad
        this.addItem(316, 4, EnemyType.LivingSkinnable, "hide"); // Monitor lizard
        this.addItem(317, 5, EnemyType.LivingSkinnable, "hide"); // Giant snake
        this.addItem(318, 6, EnemyType.LivingSkinnable, "hide"); // Dragon
        this.addItem(319, 7, EnemyType.LivingSkinnable, "hide"); // Marabou
        this.addItem(320, 8, EnemyType.LivingSkinnable, "hide"); // Alligator

        /* Roads */
        this.addItem(289, 1, EnemyType.LivingSkinnable, "hide"); // SALAMANDER
        this.addItem(290, 3, EnemyType.LivingSkinnable, "hide"); // STAG
        this.addItem(291, 4, EnemyType.LivingSkinnable, "hide"); // DIREWOLF
        this.addItem(292, 5, EnemyType.LivingSkinnable, "hide"); // BISON
        this.addItem(293, 6, EnemyType.LivingSkinnable, "hide"); // OWL
        this.addItem(294, 7, EnemyType.LivingSkinnable, "hide"); // DIREBEAR
        this.addItem(295, 8, EnemyType.LivingSkinnable, "hide"); // BASILISK

        /* Mists */
        this.addItem(261, 1, EnemyType.LivingSkinnable, "hide"); // WOLPERTINGER
        this.addItem(262, 2, EnemyType.LivingSkinnable, "hide"); // FOX
        this.addItem(263, 3, EnemyType.LivingSkinnable, "hide"); // DEER
        this.addItem(264, 4, EnemyType.LivingSkinnable, "hide"); // GIANTSTAG
        this.addItem(265, 5, EnemyType.LivingSkinnable, "hide"); // OWL
        this.addItem(266, 6, EnemyType.LivingSkinnable, "hide"); // HOUND
        this.addItem(267, 7, EnemyType.LivingSkinnable, "hide"); // DIREBEAR
        this.addItem(268, 8, EnemyType.LivingSkinnable, "hide"); // DRAGONHAWK
        //#endregion

        //#region Logs
        /* Forest */
        this.addItem(421, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(422, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(423, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(424, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(425, 7, EnemyType.LivingHarvestable, "Logs");

        /* Roads <=> Tx_MOB_CRITTER_WOOD_ROADS */
        this.addItem(446, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(447, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(448, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(449, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(450, 8, EnemyType.LivingHarvestable, "Logs");
        /* Roads Veteran <=> Tx_MOB_CRITTER_WOOD_ROADS_VETERAN */
        this.addItem(451, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(452, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(453, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(454, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(455, 8, EnemyType.LivingHarvestable, "Logs");
        /* Roads Elite <=> Tx_MOB_CRITTER_WOOD_ROADS_ELITE */
        this.addItem(456, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(457, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(458, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(459, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(460, 8, EnemyType.LivingHarvestable, "Logs");

        /* Mists Green <=> Tx_MOB_CRITTER_WOOD_MISTS_GREEN */
        this.addItem(506, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(507, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(508, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(509, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(510, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(511, 8, EnemyType.LivingHarvestable, "Logs");
        /* Mists Red <=> Tx_MOB_CRITTER_WOOD_MISTS_RED */
        this.addItem(530, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(531, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(532, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(533, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(534, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(535, 8, EnemyType.LivingHarvestable, "Logs");
        /* Mists Dead <=> Tx_MOB_CRITTER_WOOD_MISTS_DEAD */
        this.addItem(554, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(555, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(556, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(557, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(558, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(559, 8, EnemyType.LivingHarvestable, "Logs");
        //#endregion

        //#region Rock
        /* Highland */
        this.addItem(426, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(427, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(428, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(429, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(430, 7, EnemyType.LivingHarvestable, "rock");

        /* Roads <=> Tx_MOB_CRITTER_ROCK_ROADS */
        this.addItem(461, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(462, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(463, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(464, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(465, 8, EnemyType.LivingHarvestable, "rock");
        /* Veteran Roads <=> Tx_MOB_CRITTER_ROCK_ROADS_VETERAN */
        this.addItem(466, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(467, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(468, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(469, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(470, 8, EnemyType.LivingHarvestable, "rock");
        /* Elite Roads <=> Tx_MOB_CRITTER_ROCK_ROADS_ELITE */
        this.addItem(471, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(472, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(473, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(474, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(475, 8, EnemyType.LivingHarvestable, "rock");

        /* Mists Green <=> Tx_MOB_CRITTER_ROCK_MISTS_GREEN */
        this.addItem(512, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(513, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(514, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(515, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(516, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(517, 8, EnemyType.LivingHarvestable, "rock");
        /* Mists Red <=> Tx_MOB_CRITTER_ROCK_MISTS_RED */
        this.addItem(536, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(537, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(538, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(539, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(540, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(541, 8, EnemyType.LivingHarvestable, "rock");
        /* Mists Dead <=> Tx_MOB_CRITTER_ROCK_MISTS_DEAD */
        this.addItem(560, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(561, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(562, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(563, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(564, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(565, 8, EnemyType.LivingHarvestable, "rock");
        //#endregion

        //#region Ore
        /* Mountain */
        this.addItem(416, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(417, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(418, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(419, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(420, 7, EnemyType.LivingHarvestable, "ore");

        /* Roads <=> Tx_MOB_CRITTER_ORE_ROADS */
        this.addItem(476, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(477, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(478, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(479, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(480, 8, EnemyType.LivingHarvestable, "ore");
        /* Veteran Roads <=> Tx_MOB_CRITTER_ORE_ROADS_VETERAN */
        this.addItem(481, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(482, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(483, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(484, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(485, 8, EnemyType.LivingHarvestable, "ore");
        /* Elite Roads <=> Tx_MOB_CRITTER_ORE_ROADS_ELITE */
        this.addItem(486, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(487, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(488, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(489, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(490, 8, EnemyType.LivingHarvestable, "ore");

        /* Mists Green <=> Tx_MOB_CRITTER_ORE_MISTS_GREEN */
        this.addItem(518, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(519, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(520, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(521, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(522, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(523, 8, EnemyType.LivingHarvestable, "ore");
        /* Mists Red <=> Tx_MOB_CRITTER_ORE_MISTS_RED */
        this.addItem(542, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(543, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(544, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(545, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(546, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(547, 8, EnemyType.LivingHarvestable, "ore");
        /* Mists Dead <=> Tx_MOB_CRITTER_ORE_MISTS_DEAD */
        this.addItem(566, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(567, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(568, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(569, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(570, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(571, 8, EnemyType.LivingHarvestable, "ore");
        //#endregion

        //#region Fiber
        /* ??? <=> Don't know the location <=> Tx_MOB_CRITTER_FIBER */
        this.addItem(410, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(411, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(412, 7, EnemyType.LivingHarvestable, "fiber");

        /* Roads <=> Tx_MOB_CRITTER_FIBER_ROADS */
        this.addItem(491, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(492, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(493, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(494, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(495, 8, EnemyType.LivingHarvestable, "fiber");
        /* Veteran Roads <=> Tx_MOB_CRITTER_FIBER_ROADS_VETERAN */
        this.addItem(496, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(497, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(498, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(499, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(500, 8, EnemyType.LivingHarvestable, "fiber");
        /* Elite Roads <=> Tw_MOB_CRITTER_FIBER_ROADS_ELITE */
        this.addItem(501, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(502, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(503, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(504, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(505, 8, EnemyType.LivingHarvestable, "fiber");

        /* Mists Green <=> Tx_MOB_CRITTER_FIBER_MISTS_GREEN */
        this.addItem(524, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(525, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(526, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(527, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(528, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(529, 8, EnemyType.LivingHarvestable, "fiber");
        /* Mists Red <=> Tx_MOB_CRITTER_FIBER_MISTS_RED */
        this.addItem(548, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(549, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(550, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(551, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(552, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(553, 8, EnemyType.LivingHarvestable, "fiber");
        /* Mists Dead <=> Tx_MOB_CRITTER_FIBER_MISTS_DEAD */
        this.addItem(572, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(573, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(574, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(575, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(576, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(577, 8, EnemyType.LivingHarvestable, "fiber");
        //#endregion

        //#region Mists
        // TO CHECK if it is type EnemyType.MistBoss, "mob", or something else
        /* CRYSTALSPIDER_VETERAN <=> Tx_MOB_ARCANE_CRYSTALSPIDER_BOSS */
        this.addItem(245, 5, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(246, 6, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(247, 7, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(248, 8, EnemyType.MistBoss, "CRYSTALSPIDER");
        /* CRYSTALSPIDER VETERAN <=> Tx_MOB_ARCANE_CRYSTALSPIDER_VETERAN_BOSS */
        this.addItem(249, 4, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(250, 5, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(251, 6, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(252, 7, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(253, 8, EnemyType.MistBoss, "CRYSTALSPIDER");
        /* CRYSTALSPIDER <=> Tx_MOB_ARCANE_CRYSTALSPIDER_BOSS */

        /* Spider : VEILWEAVER <=> Tx_MOB_MISTS_SPIDER */
        this.addItem(274, 4, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(275, 5, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(276, 6, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(277, 7, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(278, 8, EnemyType.MistBoss, "VEILWEAVER");

        /* FAIRYDRAGON <=> Tx_MOB_MISTS_FAIRYDRAGON */
        this.addItem(279, 4, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(280, 5, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(281, 6, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(282, 7, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(283, 8, EnemyType.MistBoss, "FAIRYDRAGON");

        /* GRIFFIN <=> Tx_MOB_MISTS_GRIFFIN */
        this.addItem(284, 4, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(285, 5, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(286, 6, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(287, 7, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(288, 8, EnemyType.MistBoss, "GRIFFIN");
        //#endregion

        // TODO
        // ADD ENEMIES
        //#region Enemies

        //#region Avalon
        //#region Drones
        //#region Avalon Drones Treasure
        // Standard
        this.addItem(768, 5, EnemyType.Drone, "");
        this.addItem(769, 6, EnemyType.Drone, "");
        this.addItem(770, 7, EnemyType.Drone, "");
        this.addItem(771, 8, EnemyType.Drone, "");
        // Uncomon
        this.addItem(772, 5, EnemyType.Drone, "");
        this.addItem(773, 6, EnemyType.Drone, "");
        this.addItem(774, 7, EnemyType.Drone, "");
        this.addItem(775, 8, EnemyType.Drone, "");
        // Rare
        this.addItem(776, 5, EnemyType.Drone, "");
        this.addItem(777, 6, EnemyType.Drone, "");
        this.addItem(778, 7, EnemyType.Drone, "");
        this.addItem(779, 8, EnemyType.Drone, "");
        // Legendary
        this.addItem(780, 5, EnemyType.Drone, "");
        this.addItem(781, 6, EnemyType.Drone, "");
        this.addItem(782, 7, EnemyType.Drone, "");
        this.addItem(783, 8, EnemyType.Drone, "");
        //#endregion
        
        // Worker
        this.addItem(791, 4, EnemyType.Drone, "");
        this.addItem(792, 6, EnemyType.Drone, "");
        this.addItem(793, 8, EnemyType.Drone, "");
        // Lamp
        this.addItem(794, 4, EnemyType.Drone, "");
        this.addItem(795, 6, EnemyType.Drone, "");
        this.addItem(796, 8, EnemyType.Drone, "");
        // Normal
        this.addItem(797, 4, EnemyType.Drone, "");
        this.addItem(798, 6, EnemyType.Drone, "");
        this.addItem(799, 8, EnemyType.Drone, "");
        // Scout
        this.addItem(800, 4, EnemyType.Drone, "");
        this.addItem(801, 6, EnemyType.Drone, "");
        this.addItem(802, 8, EnemyType.Drone, "");
        // Builder
        this.addItem(803, 4, EnemyType.Drone, "");
        this.addItem(804, 6, EnemyType.Drone, "");
        this.addItem(805, 8, EnemyType.Drone, "");
        //#endregion

        //#region Pikeman
        // Standard
        this.addItem(806, 4, EnemyType.Enemy, "");
        this.addItem(807, 6, EnemyType.Enemy, "");
        this.addItem(808, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(806, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(807, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(808, 8, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region Monk
        // Standard
        this.addItem(812, 4, EnemyType.Enemy, "");
        this.addItem(813, 6, EnemyType.Enemy, "");
        this.addItem(814, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(815, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(816, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(817, 8, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region Berserk
        // Mini Boss
        this.addItem(818, 4, EnemyType.MiniBoss, "");
        this.addItem(819, 6, EnemyType.MiniBoss, "");
        this.addItem(820, 8, EnemyType.MiniBoss, "");
        //#endregion
        
        //#region Knight
        // Standard
        this.addItem(821, 4, EnemyType.Boss, "");
        this.addItem(822, 6, EnemyType.Boss, "");
        this.addItem(823, 8, EnemyType.Boss, "");
        //#endregion

        //#region Bowman
        // Standard
        this.addItem(824, 4, EnemyType.Enemy, "");
        this.addItem(825, 6, EnemyType.Enemy, "");
        this.addItem(826, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(827, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(828, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(829, 8, EnemyType.EnchantedEnemy, "");
        // Mini Boss
        this.addItem(830, 4, EnemyType.MiniBoss, "");
        this.addItem(831, 6, EnemyType.MiniBoss, "");
        this.addItem(832, 8, EnemyType.MiniBoss, "");
        // Boss
        this.addItem(833, 4, EnemyType.Boss, "");
        this.addItem(834, 6, EnemyType.Boss, "");
        this.addItem(835, 8, EnemyType.Boss, "");
        //#endregion

        //#region Wizard
        // Standard
        this.addItem(836, 4, EnemyType.Enemy, "");
        this.addItem(837, 6, EnemyType.Enemy, "");
        this.addItem(838, 8, EnemyType.Enemy, "");
        //#endregion

        //#region Cleric
        // Champion
        this.addItem(839, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(840, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(841, 8, EnemyType.EnchantedEnemy, "");
        //#endregion

        //#region Mage
        // Standard
        this.addItem(842, 4, EnemyType.Enemy, "");
        this.addItem(843, 6, EnemyType.Enemy, "");
        this.addItem(844, 8, EnemyType.Enemy, "");
        // Champion
        this.addItem(845, 4, EnemyType.EnchantedEnemy, "");
        this.addItem(846, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(847, 8, EnemyType.EnchantedEnemy, "");
        // Mini Boss
        this.addItem(848, 4, EnemyType.MiniBoss, "");
        this.addItem(849, 6, EnemyType.MiniBoss, "");
        this.addItem(850, 8, EnemyType.MiniBoss, "");
        // Boss
        this.addItem(848, 4, EnemyType.Boss, "");
        this.addItem(849, 6, EnemyType.Boss, "");
        this.addItem(850, 8, EnemyType.Boss, "");
        //#endregion
        //#endregion
        
        //#region Heretic
        // 854
        //#endregion
        
        this.addItem(1466, 4, EnemyType.Enemy, "UNDEADARCHER4");
        //#endregion
    }
}