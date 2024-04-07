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
        // Steppe biome +25
        this.addItem(349, 1, EnemyType.LivingSkinnable, "hide"); // Marmot
        this.addItem(350, 2, EnemyType.LivingSkinnable, "hide"); // Impala
        this.addItem(351, 3, EnemyType.LivingSkinnable, "hide"); // Moabird
        this.addItem(352, 4, EnemyType.LivingSkinnable, "hide"); // Giant stag
        this.addItem(353, 5, EnemyType.LivingSkinnable, "hide"); // Terrorbird
        this.addItem(354, 6, EnemyType.LivingSkinnable, "hide"); // Hyena
        this.addItem(355, 7, EnemyType.LivingSkinnable, "hide"); // Rhino
        this.addItem(356, 7, EnemyType.LivingSkinnable, "hide"); // Bighorn Rhino
        this.addItem(357, 8, EnemyType.LivingSkinnable, "hide"); // Mammoth
        this.addItem(358, 8, EnemyType.LivingSkinnable, "hide"); // Ancient Mammoth
        this.addItem(438, 3, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(439, 5, EnemyType.LivingSkinnable, "hide"); // Cougar
        this.addItem(440, 7, EnemyType.LivingSkinnable, "hide"); // Cougar

        // Highland
        this.addItem(364, 1, EnemyType.LivingSkinnable, "hide"); // Rabbit
        this.addItem(365, 1, EnemyType.LivingSkinnable, "hide"); // Marmot

        // Forest biome + 15
        this.addItem(321, 1, EnemyType.LivingSkinnable, "hide"); // Rabbit
        this.addItem(322, 2, EnemyType.LivingSkinnable, "hide"); // Fox
        this.addItem(323, 2, EnemyType.LivingSkinnable, "hide"); // Fox tutorial
        // +16
        this.addItem(324, 3, EnemyType.LivingSkinnable, "hide"); // Wolf
        this.addItem(325, 4, EnemyType.LivingSkinnable, "hide"); // Boar
        this.addItem(326, 5, EnemyType.LivingSkinnable, "hide"); // Bear
        this.addItem(327, 6, EnemyType.LivingSkinnable, "hide"); // Direwolf
        this.addItem(328, 6, EnemyType.LivingSkinnable, "hide"); // Giant Stag
        this.addItem(329, 7, EnemyType.LivingSkinnable, "hide"); // Direboar small
        this.addItem(330, 7, EnemyType.LivingSkinnable, "hide"); // Direboar
        this.addItem(331, 8, EnemyType.LivingSkinnable, "hide"); // Direbear small
        this.addItem(332, 8, EnemyType.LivingSkinnable, "hide"); // Direbear

        // Swamp biome +25
        this.addItem(338, 1, EnemyType.LivingSkinnable, "hide"); // Toad
        this.addItem(339, 2, EnemyType.LivingSkinnable, "hide"); // Snake
        this.addItem(340, 3, EnemyType.LivingSkinnable, "hide"); // Giant toad
        this.addItem(341, 4, EnemyType.LivingSkinnable, "hide"); // Monitor lizard
        this.addItem(342, 5, EnemyType.LivingSkinnable, "hide"); // Giant snake
        this.addItem(343, 6, EnemyType.LivingSkinnable, "hide"); // Dragon
        this.addItem(344, 7, EnemyType.LivingSkinnable, "hide"); // Marabou
        this.addItem(345, 8, EnemyType.LivingSkinnable, "hide"); // Alligator

        // Roads +25
        this.addItem(314, 1, EnemyType.LivingSkinnable, "hide"); // SALAMANDER
        this.addItem(315, 3, EnemyType.LivingSkinnable, "hide"); // STAG
        this.addItem(316, 4, EnemyType.LivingSkinnable, "hide"); // DIREWOLF
        this.addItem(317, 5, EnemyType.LivingSkinnable, "hide"); // BISON
        this.addItem(318, 6, EnemyType.LivingSkinnable, "hide"); // OWL
        this.addItem(319, 7, EnemyType.LivingSkinnable, "hide"); // DIREBEAR
        this.addItem(320, 8, EnemyType.LivingSkinnable, "hide"); // BASILISK

        // Mists +25
        this.addItem(286, 1, EnemyType.LivingSkinnable, "hide"); // WOLPERTINGER
        this.addItem(287, 2, EnemyType.LivingSkinnable, "hide"); // FOX
        this.addItem(288, 3, EnemyType.LivingSkinnable, "hide"); // DEER
        this.addItem(289, 4, EnemyType.LivingSkinnable, "hide"); // GIANTSTAG
        this.addItem(290, 5, EnemyType.LivingSkinnable, "hide"); // OWL
        this.addItem(291, 6, EnemyType.LivingSkinnable, "hide"); // HOUND
        this.addItem(292, 7, EnemyType.LivingSkinnable, "hide"); // DIREBEAR
        this.addItem(293, 8, EnemyType.LivingSkinnable, "hide"); // DRAGONHAWK

        // Cougars +25
        this.addItem(456, 4, EnemyType.LivingSkinnable, "hide");
        this.addItem(457, 5, EnemyType.LivingSkinnable, "hide");
        this.addItem(458, 6, EnemyType.LivingSkinnable, "hide");
        this.addItem(459, 7, EnemyType.LivingSkinnable, "hide");
        this.addItem(460, 8, EnemyType.LivingSkinnable, "hide");
        // Veteran
        this.addItem(461, 4, EnemyType.LivingSkinnable, "hide");
        this.addItem(462, 5, EnemyType.LivingSkinnable, "hide");
        this.addItem(463, 6, EnemyType.LivingSkinnable, "hide");
        this.addItem(464, 7, EnemyType.LivingSkinnable, "hide");
        this.addItem(465, 8, EnemyType.LivingSkinnable, "hide");
        // Elite
        this.addItem(466, 4, EnemyType.LivingSkinnable, "hide");
        this.addItem(467, 5, EnemyType.LivingSkinnable, "hide");
        this.addItem(468, 6, EnemyType.LivingSkinnable, "hide");
        this.addItem(469, 7, EnemyType.LivingSkinnable, "hide");
        this.addItem(470, 8, EnemyType.LivingSkinnable, "hide");

        //#endregion

        //#region Logs
        // Forest +25
        this.addItem(446, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(447, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(448, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(449, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(450, 7, EnemyType.LivingHarvestable, "Logs");

        // Roads <=> Tx_MOB_CRITTER_WOOD_ROADS +25
        this.addItem(471, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(472, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(473, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(474, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(475, 8, EnemyType.LivingHarvestable, "Logs");
        // Roads Veteran <=> Tx_MOB_CRITTER_WOOD_ROADS_VETERAN +25
        this.addItem(476, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(477, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(478, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(479, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(480, 8, EnemyType.LivingHarvestable, "Logs");
        // Roads Elite <=> Tx_MOB_CRITTER_WOOD_ROADS_ELITE +25
        this.addItem(481, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(482, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(483, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(484, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(485, 8, EnemyType.LivingHarvestable, "Logs");

        // Mists Green <=> Tx_MOB_CRITTER_WOOD_MISTS_GREEN +25
        this.addItem(531, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(532, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(533, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(534, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(535, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(536, 8, EnemyType.LivingHarvestable, "Logs");
        // Mists Red <=> Tx_MOB_CRITTER_WOOD_MISTS_RED +25
        this.addItem(555, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(556, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(557, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(558, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(559, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(560, 8, EnemyType.LivingHarvestable, "Logs");
        // Mists Dead <=> Tx_MOB_CRITTER_WOOD_MISTS_DEAD +25
        this.addItem(579, 3, EnemyType.LivingHarvestable, "Logs");
        this.addItem(580, 4, EnemyType.LivingHarvestable, "Logs");
        this.addItem(581, 5, EnemyType.LivingHarvestable, "Logs");
        this.addItem(582, 6, EnemyType.LivingHarvestable, "Logs");
        this.addItem(583, 7, EnemyType.LivingHarvestable, "Logs");
        this.addItem(584, 8, EnemyType.LivingHarvestable, "Logs");
        //#endregion

        //#region Rock
        // Highland +25
        this.addItem(451, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(452, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(453, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(454, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(455, 7, EnemyType.LivingHarvestable, "rock");

        // Roads <=> Tx_MOB_CRITTER_ROCK_ROADS +25
        this.addItem(486, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(487, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(488, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(489, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(490, 8, EnemyType.LivingHarvestable, "rock");
        // Veteran Roads <=> Tx_MOB_CRITTER_ROCK_ROADS_VETERAN +25
        this.addItem(491, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(492, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(493, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(494, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(495, 8, EnemyType.LivingHarvestable, "rock");
        // Elite Roads <=> Tx_MOB_CRITTER_ROCK_ROADS_ELITE +25
        this.addItem(496, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(497, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(498, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(499, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(500, 8, EnemyType.LivingHarvestable, "rock");

        // Mists Green <=> Tx_MOB_CRITTER_ROCK_MISTS_GREEN +25
        this.addItem(537, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(538, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(539, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(540, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(541, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(542, 8, EnemyType.LivingHarvestable, "rock");
        // Mists Red <=> Tx_MOB_CRITTER_ROCK_MISTS_RED +25
        this.addItem(561, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(562, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(563, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(564, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(565, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(566, 8, EnemyType.LivingHarvestable, "rock");
        // Mists Dead <=> Tx_MOB_CRITTER_ROCK_MISTS_DEAD +25
        this.addItem(585, 3, EnemyType.LivingHarvestable, "rock");
        this.addItem(586, 4, EnemyType.LivingHarvestable, "rock");
        this.addItem(587, 5, EnemyType.LivingHarvestable, "rock");
        this.addItem(588, 6, EnemyType.LivingHarvestable, "rock");
        this.addItem(589, 7, EnemyType.LivingHarvestable, "rock");
        this.addItem(590, 8, EnemyType.LivingHarvestable, "rock");
        //#endregion

        //#region Ore
        // Mountain +25
        this.addItem(441, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(442, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(443, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(444, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(445, 7, EnemyType.LivingHarvestable, "ore");

        // Roads <=> Tx_MOB_CRITTER_ORE_ROADS +25
        this.addItem(501, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(502, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(503, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(504, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(505, 8, EnemyType.LivingHarvestable, "ore");
        // Veteran Roads <=> Tx_MOB_CRITTER_ORE_ROADS_VETERAN +25
        this.addItem(506, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(507, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(508, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(509, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(510, 8, EnemyType.LivingHarvestable, "ore");
        // Elite Roads <=> Tx_MOB_CRITTER_ORE_ROADS_ELITE +25
        this.addItem(511, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(512, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(513, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(514, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(515, 8, EnemyType.LivingHarvestable, "ore");

        // Mists Green <=> Tx_MOB_CRITTER_ORE_MISTS_GREEN +25
        this.addItem(543, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(544, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(545, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(546, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(547, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(548, 8, EnemyType.LivingHarvestable, "ore");
        // Mists Red <=> Tx_MOB_CRITTER_ORE_MISTS_RED +25
        this.addItem(567, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(568, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(569, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(570, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(571, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(572, 8, EnemyType.LivingHarvestable, "ore");
        // Mists Dead <=> Tx_MOB_CRITTER_ORE_MISTS_DEAD +25
        this.addItem(591, 3, EnemyType.LivingHarvestable, "ore");
        this.addItem(592, 4, EnemyType.LivingHarvestable, "ore");
        this.addItem(593, 5, EnemyType.LivingHarvestable, "ore");
        this.addItem(594, 6, EnemyType.LivingHarvestable, "ore");
        this.addItem(595, 7, EnemyType.LivingHarvestable, "ore");
        this.addItem(596, 8, EnemyType.LivingHarvestable, "ore");
        //#endregion

        //#region Fiber
        // ??? <=> Don't know the location <=> Tx_MOB_CRITTER_FIBER + 25
        this.addItem(435, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(436, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(437, 7, EnemyType.LivingHarvestable, "fiber");

        // Roads <=> Tx_MOB_CRITTER_FIBER_ROADS +25
        this.addItem(516, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(517, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(518, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(519, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(520, 8, EnemyType.LivingHarvestable, "fiber");
        // Veteran Roads <=> Tx_MOB_CRITTER_FIBER_ROADS_VETERAN +25
        this.addItem(521, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(522, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(523, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(524, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(525, 8, EnemyType.LivingHarvestable, "fiber");
        // Elite Roads <=> Tw_MOB_CRITTER_FIBER_ROADS_ELITE +25
        this.addItem(526, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(527, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(528, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(529, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(530, 8, EnemyType.LivingHarvestable, "fiber");

        // Mists Green <=> Tx_MOB_CRITTER_FIBER_MISTS_GREEN +25
        this.addItem(549, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(550, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(551, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(552, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(553, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(554, 8, EnemyType.LivingHarvestable, "fiber");
        // Mists Red <=> Tx_MOB_CRITTER_FIBER_MISTS_RED +25
        this.addItem(573, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(574, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(575, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(576, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(577, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(578, 8, EnemyType.LivingHarvestable, "fiber");
        // Mists Dead <=> Tx_MOB_CRITTER_FIBER_MISTS_DEAD +25
        this.addItem(597, 3, EnemyType.LivingHarvestable, "fiber");
        this.addItem(598, 4, EnemyType.LivingHarvestable, "fiber");
        this.addItem(599, 5, EnemyType.LivingHarvestable, "fiber");
        this.addItem(600, 6, EnemyType.LivingHarvestable, "fiber");
        this.addItem(601, 7, EnemyType.LivingHarvestable, "fiber");
        this.addItem(602, 8, EnemyType.LivingHarvestable, "fiber");
        //#endregion

        //#region Mist bosses
        /*
        // CRYSTALSPIDER <=> Tx_MOB_ARCANE_CRYSTALSPIDER_BOSS
        this.addItem(245, 5, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(246, 6, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(247, 7, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(248, 8, EnemyType.MistBoss, "CRYSTALSPIDER");
        // CRYSTALSPIDER VETERAN <=> Tx_MOB_ARCANE_CRYSTALSPIDER_VETERAN_BOSS 
        this.addItem(249, 4, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(250, 5, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(251, 6, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(252, 7, EnemyType.MistBoss, "CRYSTALSPIDER");
        this.addItem(253, 8, EnemyType.MistBoss, "CRYSTALSPIDER");
        */

        // Spider : VEILWEAVER <=> Tx_MOB_MISTS_SPIDER +25
        this.addItem(299, 4, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(300, 5, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(301, 6, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(302, 7, EnemyType.MistBoss, "VEILWEAVER");
        this.addItem(303, 8, EnemyType.MistBoss, "VEILWEAVER");

        // FAIRYDRAGON <=> Tx_MOB_MISTS_FAIRYDRAGON +25
        this.addItem(304, 4, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(305, 5, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(306, 6, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(307, 7, EnemyType.MistBoss, "FAIRYDRAGON");
        this.addItem(308, 8, EnemyType.MistBoss, "FAIRYDRAGON");

        // GRIFFIN <=> Tx_MOB_MISTS_GRIFFIN +25
        this.addItem(309, 4, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(310, 5, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(311, 6, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(312, 7, EnemyType.MistBoss, "GRIFFIN");
        this.addItem(313, 8, EnemyType.MistBoss, "GRIFFIN");
        //#endregion
        
        /*
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
        // Normal and camp are exactly the same, just id change 
        //#region Scavenger
        // Normal
        this.addItem(854, 3, EnemyType.Enemy, "");
        this.addItem(855, 5, EnemyType.Enemy, "");
        this.addItem(856, 6, EnemyType.Enemy, "");
        this.addItem(857, 7, EnemyType.Enemy, "");
        this.addItem(858, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(859, 5, EnemyType.Enemy, "");
        this.addItem(860, 6, EnemyType.Enemy, "");
        this.addItem(861, 7, EnemyType.Enemy, "");
        this.addItem(862, 8, EnemyType.Enemy, "");
        //#endregion
        
        //#region Woodgatherer
        // Normal
        this.addItem(863, 3, EnemyType.Enemy, "");
        this.addItem(864, 5, EnemyType.Enemy, "");
        this.addItem(865, 6, EnemyType.Enemy, "");
        this.addItem(866, 7, EnemyType.Enemy, "");
        this.addItem(867, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(868, 5, EnemyType.Enemy, "");
        this.addItem(869, 6, EnemyType.Enemy, "");
        this.addItem(870, 7, EnemyType.Enemy, "");
        this.addItem(871, 8, EnemyType.Enemy, "");
        //#endregion
        
        //#region Thief
        // Normal
        this.addItem(872, 3, EnemyType.Enemy, "");
        this.addItem(873, 5, EnemyType.Enemy, "");
        this.addItem(874, 6, EnemyType.Enemy, "");
        this.addItem(875, 7, EnemyType.Enemy, "");
        this.addItem(876, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(877, 5, EnemyType.Enemy, "");
        this.addItem(878, 6, EnemyType.Enemy, "");
        this.addItem(879, 7, EnemyType.Enemy, "");
        this.addItem(880, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(881, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(882, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(883, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(884, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(885, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(886, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(887, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(888, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(889, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(890, 3, EnemyType.MiniBoss, "");
        this.addItem(891, 5, EnemyType.MiniBoss, "");
        this.addItem(892, 6, EnemyType.MiniBoss, "");
        this.addItem(893, 7, EnemyType.MiniBoss, "");
        this.addItem(894, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(895, 5, EnemyType.MiniBoss, "");
        this.addItem(896, 6, EnemyType.MiniBoss, "");
        this.addItem(897, 7, EnemyType.MiniBoss, "");
        this.addItem(898, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Archer
        // Normal
        this.addItem(899, 3, EnemyType.Enemy, "");
        this.addItem(900, 5, EnemyType.Enemy, "");
        this.addItem(901, 6, EnemyType.Enemy, "");
        this.addItem(902, 7, EnemyType.Enemy, "");
        this.addItem(903, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(904, 5, EnemyType.Enemy, "");
        this.addItem(905, 6, EnemyType.Enemy, "");
        this.addItem(906, 7, EnemyType.Enemy, "");
        this.addItem(907, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(908, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(909, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(910, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(911, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(912, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(913, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(914, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(915, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(916, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(917, 3, EnemyType.MiniBoss, "");
        this.addItem(918, 5, EnemyType.MiniBoss, "");
        this.addItem(919, 6, EnemyType.MiniBoss, "");
        this.addItem(920, 7, EnemyType.MiniBoss, "");
        this.addItem(921, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(922, 5, EnemyType.MiniBoss, "");
        this.addItem(923, 6, EnemyType.MiniBoss, "");
        this.addItem(924, 7, EnemyType.MiniBoss, "");
        this.addItem(925, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Mage
        // Normal
        this.addItem(926, 3, EnemyType.Enemy, "");
        this.addItem(927, 5, EnemyType.Enemy, "");
        this.addItem(928, 6, EnemyType.Enemy, "");
        this.addItem(929, 7, EnemyType.Enemy, "");
        this.addItem(930, 8, EnemyType.Enemy, "");
        // Camp
        this.addItem(931, 5, EnemyType.Enemy, "");
        this.addItem(932, 6, EnemyType.Enemy, "");
        this.addItem(933, 7, EnemyType.Enemy, "");
        this.addItem(934, 8, EnemyType.Enemy, "");

        // Normal Champion
        this.addItem(935, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(936, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(937, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(938, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(939, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(940, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(941, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(942, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(943, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(944, 3, EnemyType.MiniBoss, "");
        this.addItem(945, 5, EnemyType.MiniBoss, "");
        this.addItem(946, 6, EnemyType.MiniBoss, "");
        this.addItem(947, 7, EnemyType.MiniBoss, "");
        this.addItem(948, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(949, 5, EnemyType.MiniBoss, "");
        this.addItem(950, 6, EnemyType.MiniBoss, "");
        this.addItem(951, 7, EnemyType.MiniBoss, "");
        this.addItem(952, 8, EnemyType.MiniBoss, "");

        // Normal Boss
        this.addItem(953, 3, EnemyType.Boss, "");
        this.addItem(954, 5, EnemyType.Boss, "");
        this.addItem(955, 6, EnemyType.Boss, "");
        this.addItem(956, 7, EnemyType.Boss, "");
        this.addItem(957, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(958, 5, EnemyType.Boss, "");
        this.addItem(959, 6, EnemyType.Boss, "");
        this.addItem(960, 7, EnemyType.Boss, "");
        this.addItem(961, 8, EnemyType.Boss, "");

        // Boss summon
        this.addItem(962, 3, EnemyType.Enemy, "");
        //#endregion

        //#region Tank
        // Normal Champion
        this.addItem(963, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(964, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(965, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(966, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(967, 8, EnemyType.EnchantedEnemy, "");
        // Camp Champion
        this.addItem(968, 5, EnemyType.EnchantedEnemy, "");
        this.addItem(969, 6, EnemyType.EnchantedEnemy, "");
        this.addItem(970, 7, EnemyType.EnchantedEnemy, "");
        this.addItem(971, 8, EnemyType.EnchantedEnemy, "");

        // Normal Miniboss
        this.addItem(972, 3, EnemyType.MiniBoss, "");
        this.addItem(973, 5, EnemyType.MiniBoss, "");
        this.addItem(974, 6, EnemyType.MiniBoss, "");
        this.addItem(975, 7, EnemyType.MiniBoss, "");
        this.addItem(976, 8, EnemyType.MiniBoss, "");
        // Camp Miniboss
        this.addItem(977, 5, EnemyType.MiniBoss, "");
        this.addItem(978, 6, EnemyType.MiniBoss, "");
        this.addItem(979, 7, EnemyType.MiniBoss, "");
        this.addItem(980, 8, EnemyType.MiniBoss, "");
        //#endregion

        //#region Balista
        // Normal Boss
        this.addItem(981, 3, EnemyType.Boss, "");
        this.addItem(982, 5, EnemyType.Boss, "");
        this.addItem(983, 6, EnemyType.Boss, "");
        this.addItem(984, 7, EnemyType.Boss, "");
        this.addItem(985, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(986, 5, EnemyType.Boss, "");
        this.addItem(987, 6, EnemyType.Boss, "");
        this.addItem(988, 7, EnemyType.Boss, "");
        this.addItem(989, 8, EnemyType.Boss, "");
        //#endregion

        //#region Overseer
        // Normal Boss
        this.addItem(990, 3, EnemyType.Boss, "");
        this.addItem(991, 5, EnemyType.Boss, "");
        this.addItem(992, 6, EnemyType.Boss, "");
        this.addItem(993, 7, EnemyType.Boss, "");
        this.addItem(994, 8, EnemyType.Boss, "");
        // Camp Boss
        this.addItem(995, 5, EnemyType.Boss, "");
        this.addItem(996, 6, EnemyType.Boss, "");
        this.addItem(997, 7, EnemyType.Boss, "");
        this.addItem(998, 8, EnemyType.Boss, "");
        //#endregion

        //#region Shadowmask
        this.addItem(999, 3, EnemyType.Boss, "");
        //#endregion
        
        //#region Veteran
        //Rat
        this.addItem(1004, 3, EnemyType.Enemy, "");
        // Woodgatherer
        this.addItem(1005, 3, EnemyType.Enemy, "");
        // Scavenger
        this.addItem(1006, 3, EnemyType.Enemy, "");
        // Thief
        this.addItem(1007, 3, EnemyType.MediumEnemy, "");
        this.addItem(1008, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1009, 3, EnemyType.MiniBoss, "");
        // Archer
        this.addItem(1010, 3, EnemyType.MediumEnemy, "");
        this.addItem(1011, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1012, 3, EnemyType.MiniBoss, "");
        // Mage
        this.addItem(1013, 3, EnemyType.Enemy, "");
        this.addItem(1014, 3, EnemyType.MediumEnemy, "");
        this.addItem(1015, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1016, 3, EnemyType.MiniBoss, "");
        // Healer
        this.addItem(1017, 3, EnemyType.Enemy, "");
        this.addItem(1018, 3, EnemyType.MediumEnemy, "");
        this.addItem(1019, 3, EnemyType.EnchantedEnemy, "");
        // Tank
        this.addItem(1020, 3, EnemyType.Enemy, "");
        this.addItem(1021, 3, EnemyType.MediumEnemy, "");
        this.addItem(1022, 3, EnemyType.EnchantedEnemy, "");
        this.addItem(1023, 3, EnemyType.MiniBoss, "");
        // Mortar
        this.addItem(1024, 3, EnemyType.Enemy, "");
        this.addItem(1025, 3, EnemyType.MediumEnemy, "");
        this.addItem(1026, 3, EnemyType.EnchantedEnemy, "");
        //#endregion
        
        //#region World
        // Woodgatherer
        this.addItem(1030, 1, EnemyType.Enemy, "");
        this.addItem(1031, 2, EnemyType.Enemy, "");
        this.addItem(1032, 3, EnemyType.Enemy, "");
        // Thief
        this.addItem(1033, 1, EnemyType.Enemy, "");
        this.addItem(1034, 2, EnemyType.Enemy, "");
        this.addItem(1035, 2, EnemyType.MiniBoss, "");
        this.addItem(1036, 2, EnemyType.Boss, "");
        this.addItem(1037, 3, EnemyType.Enemy, "");
        this.addItem(1038, 3, EnemyType.MiniBoss, "");
        this.addItem(1039, 3, EnemyType.MediumEnemy, "");
        this.addItem(1040, 3, EnemyType.Boss, "");
        // Archer
        this.addItem(1041, 1, EnemyType.Enemy, "");
        this.addItem(1042, 2, EnemyType.Enemy, "");
        this.addItem(1043, 2, EnemyType.MiniBoss, "");
        this.addItem(1044, 2, EnemyType.Boss, "");
        this.addItem(1045, 3, EnemyType.Enemy, "");
        this.addItem(1046, 3, EnemyType.MiniBoss, "");
        this.addItem(1047, 3, EnemyType.MediumEnemy, "");
        this.addItem(1048, 3, EnemyType.Boss, "");
        // Healer
        this.addItem(1049, 1, EnemyType.Enemy, "");
        this.addItem(1050, 2, EnemyType.Enemy, "");
        this.addItem(1051, 3, EnemyType.Enemy, "");
        this.addItem(1052, 3, EnemyType.MiniBoss, "");
        this.addItem(1053, 3, EnemyType.MediumEnemy, "");
        this.addItem(1054, 3, EnemyType.Boss, "");
        // Mage
        this.addItem(1055, 1, EnemyType.Enemy, "");
        this.addItem(1056, 2, EnemyType.Enemy, "");
        this.addItem(1057, 2, EnemyType.MiniBoss, "");
        this.addItem(1058, 2, EnemyType.Boss, "");
        this.addItem(1059, 3, EnemyType.Enemy, "");
        this.addItem(1060, 3, EnemyType.MiniBoss, "");
        this.addItem(1061, 3, EnemyType.MediumEnemy, "");
        this.addItem(1062, 3, EnemyType.Boss, "");
        // Totem spells
        this.addItem(1063, 2, EnemyType.Enemy, "");
        this.addItem(1064, 2, EnemyType.Enemy, "");
        this.addItem(1065, 2, EnemyType.Enemy, "");
        this.addItem(1066, 3, EnemyType.Enemy, "");
        this.addItem(1067, 3, EnemyType.Enemy, "");
        this.addItem(1068, 3, EnemyType.Enemy, "");
        // Foulrat
        this.addItem(1069, 2, EnemyType.Enemy, "");
        this.addItem(1070, 3, EnemyType.Enemy, "");
        this.addItem(1071, 3, EnemyType.MediumEnemy, "");
        // Scavenger tutorial
        this.addItem(1072, 1, EnemyType.Enemy, "");
        this.addItem(1073, 1, EnemyType.Enemy, "");
        // Scavenger
        this.addItem(1074, 2, EnemyType.Enemy, "");
        this.addItem(1075, 3, EnemyType.Enemy, "");
        this.addItem(1076, 3, EnemyType.MediumEnemy, "");
        // Tank
        this.addItem(1077, 1, EnemyType.Enemy, "");
        this.addItem(1078, 2, EnemyType.Enemy, "");
        this.addItem(1079, 2, EnemyType.MiniBoss, "");
        this.addItem(1080, 2, EnemyType.Boss, "");
        this.addItem(1081, 3, EnemyType.Enemy, "");
        this.addItem(1082, 3, EnemyType.MiniBoss, "");
        this.addItem(1083, 3, EnemyType.Boss, "");
        this.addItem(1084, 3, EnemyType.MediumEnemy, "");
        // Mortar
        this.addItem(1085, 2, EnemyType.Enemy, "");
        this.addItem(1086, 3, EnemyType.Enemy, "");
        this.addItem(1087, 3, EnemyType.MediumEnemy, "");
        // Balista
        this.addItem(1088, 2, EnemyType.Enemy, "");
        this.addItem(1089, 2, EnemyType.Enemy, "");
        this.addItem(1090, 3, EnemyType.Enemy, "");
        this.addItem(1091, 3, EnemyType.MediumEnemy, "");
        // Other
        this.addItem(1092, 3, EnemyType.Boss, ""); // lumberjack boss
        this.addItem(1093, 3, EnemyType.Boss, ""); // gibson boss
        this.addItem(1094, 3, EnemyType.Enemy, ""); // gibson stooge
        this.addItem(1095, 3, EnemyType.Enemy, ""); // heretic overseer
        //#endregion
        //#endregion
        
        // TODO
        //#region Morgana

        //#endregion

        //#region Demon
        //this.addItem(2038, 4, EnemyType.Enemy, "");
        //#endregion

        //this.addItem(1466, 4, EnemyType.Enemy, "UNDEADARCHER4");
        //#endregion
        */
    
        //#region Event Enemies
        //#region EASTER
        // Chests
        this.addItem(692, 2, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(693, 3, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(694, 4, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(695, 5, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(696, 6, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(697, 7, EnemyType.Events, "EVENTEASTERCHEST2");
        this.addItem(698, 8, EnemyType.Events, "EVENTEASTERCHEST2");

        // Enemies
        this.addItem(732, 2, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(733, 3, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(734, 4, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(735, 5, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(736, 6, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(737, 7, EnemyType.Events, "EVENTEASTERCHEST1");
        this.addItem(738, 8, EnemyType.Events, "EVENTEASTERCHEST1");
        //#endregion
 
        //#endregion
    }
}