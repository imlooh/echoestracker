// COMMENCE SPAGHETTI CODE
/* Beeg Globals */
var rooms = [
    {
        "temple_grounds_hive_light": [
            {
                "name": "Hive Chamber A",
                "item": {
                    "id": "hca",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Violet Translator",
                                "Violet Translator"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "note": "The Dark Missile Trooper does not appear until the Bomb Guardian has been killed.",
                    "actual": "",
                    "x": "420",
                    "y": "350"
                },
            },
            {
                "name": "Hive Chamber B",
                "item": {
                    "id": "hcb",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "650",
                    "y": "285"
                },
                "requirements": []
            },
            {
                "name": "Transport to Agon Wastes",
                "item": {
                    "id": "tptaw",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Violet Translator"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "995",
                    "y": "430"
                },
                "requirements": [
                    { "item": "Violet Translator" }
                ]
            }],
        "temple_grounds_north_light": [
            {
                "name": "Storage Cavern B",
                "item": {
                    "id": "hca",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "793",
                    "y": "778"
                }
            },

            {
                "name": "Temple Assembly Site",
                "item": {
                    "id": "tsa",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Space Jump Boots"
                            ]
                        },
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "note": "You can bomb jump on the platform if you lack the Space Jump Boots.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "800",
                    "y": "651"
                }
            },

            {
                "name": "Hall of Honored Dead",
                "item": {
                    "id": "hohd",
                    "original": "Seeker Launcher",
                    "requirements": [
                        {
                            "group": [
                                "Boost Ball",
                                "Seeker Launcher"
                            ]
                        },
                        {
                            "group": [
                                "Boost Ball",
                                "Space Jump Boots"
                            ]
                        },
                        {
                            "group": [
                                "Violet Translator",
                                "Super Missile",
                                "Boost Ball",
                                "Seeker Launcher"
                            ]
                        }
                    ],
                    "note": "Only enter this room if you either have the Seeker Missile Launcher already, know for sure this is its location, or have saved the game.<br><br>If you have the Space Jump Boots, you can instant morph into the tunnel above the door to escape, though not considered in no tricks.<br /><br>Violet, Super Missiles, and the Seeker Launcher are required for access from Meeting Grounds.", 
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "503",
                    "y": "570"
                }
            },

            {
                "name": "Dynamo Chamber",
                "item": {
                    "id": "dyn-c",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Power Bomb"
                            ]
                        }
                    ],
                    "note": "Accessible via a difficult wallcrawl beginning by the Temple Transport B door in Temple Assembly Site. Requires the Space Jump Boots and Morph Ball Bomb.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "797",
                    "y": "576"
                }
            },

            {
                "name": "Communication Area",
                "item": {
                    "id": "comm-area",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "760",
                    "y": "475"
                }
            },

            {
                "name": "GFMC Compound",
                "item": {
                    "id": "gfmc-com",
                    "original": "Missile Launcher",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "578",
                    "y": "170"
                }
            },

            {
                "name": "GFMC Compound",
                "item": {
                    "id": "gfmc-ship",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "This item does not appear until the Space Jump Guardian has been defeated.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "598",
                    "y": "95"
                }
            },

            {
                "name": "Fortress Transport Access",
                "item": {
                    "id": "fort-tran-acc",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "422",
                    "y": "60"
                }
            },

            {
                "name": "Grand Windchamber",
                "item": {
                    "id": "grand-wind",
                    "original": "Sunburst",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Power Bomb",
                                "Seeker Launcher",
                                "Dark Visor", 
                                "Screw Attack"
                            ]
                        },
                        {
                            "group": [
                                "Annihilator Beam",
                                "Power Bomb",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Screw Attack"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "note": "This item is accessible with a Bomb Space Jump followed by a Screw Attack. Not considered in the no tricks setting.",
                    "actual": "",
                    "x": "360",
                    "y": "330"
                }
            },

            {
                "name": "Windchamber Gateway",
                "item": {
                    "id": "wind-gate",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Power Bomb",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb",
                                "Grapple Beam"
                            ]
                        }, {
                            "group": [
                                "Super Missile",
                                "Light Beam",
                                "Dark Beam",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        },
                        {
                            "group": [
                                "Super Missile",
                                "Light Beam",
                                "Dark Beam",
                                "Grapple Beam"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "210",
                    "y": "292"
                }
            }
        ],
        "great_temple": [
            {
                "name": "Main Energy Controller",
                "item": {
                    "id": "mec-1",
                    "original": "Violet Translator",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "520",
                    "y": "470"
                }
            },
            {
                "name": "Main Energy Controller",
                "item": {
                    "id": "mec-2",
                    "original": "Light Suit",
                    "note": "Only available after Sanctuary energy has been returned.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "585",
                    "y": "470"
                }
            },
            {
                "name": "Temple Sanctuary",
                "item": {
                    "id": "temp-sanc",
                    "original": "Energy Transfer Module",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "553",
                    "y": "541"
                }
            },
            {
                "name": "Transport A Access",
                "item": {
                    "id": "trans-a",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Emerald Translator"
                            ]
                        },
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "note": "If you have the Morph Ball Bomb before entering the Temple Sanctuary, the Emerald Translator is not required.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "621",
                    "y": "285"
                }
            },
            {
                "name": "Transport B Access",
                "item": {
                    "id": "trans-b",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Violet Translator",
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "note": "An easy slope jump can be done to grab this item without bombs, but is not part of no tricks. Requires Space Jump Boots.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "760",
                    "y": "530"
                }
            }
        ],
        "agon_wastes_mines": [
            {
                "name": "Mining Plaza",
                "item": {
                    "id": "mine-plaza",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Echo Visor",
                                "Annihilator Beam",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "note": "Only accessible once the Agon energy has been returned.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "247",
                    "y": "240"
                }
            }, {
                "name": "Mining Station Access",
                "item": {
                    "id": "mine-station-acc",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        },{
                            "group": [
                                "Power Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "580",
                    "y": "284"
                }
            }, {
                "name": "Mining Station A",
                "item": {
                    "id": "mine-station-a",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Power Bomb",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "753",
                    "y": "370"
                }
            }, {
                "name": "Sand Cache",
                "item": {
                    "id": "sand-cache",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Amber Translator"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "783",
                    "y": "469"
                }
            }, {
                "name": "Portal Access",
                "item": {
                    "id": "portal-acc",
                    "original": "Missile Expansion",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "685",
                    "y": "465"
                }
            }, {
                "name": "Transport Center",
                "item": {
                    "id": "trans-center",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        },

                        {
                            "group": [
                                "Darkburst"
                            ]
                        }
                    ],
                    "note": "The Darkburst, when timed with a quick morph into the bomb slot, actually triggers bomb slots as if a bomb were used (discovered by Dyceron). Not considered in no tricks.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "555",
                    "y": "522"
                }
            }
            , {
                "name": "Central Mining Station",
                "item": {
                    "id": "cent-mine-station",
                    "original": "Beam Ammo Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Space Jump Boots",
                                "Light Beam",
                            ]
                        },
                        {
                            "group": [
                                "Space Jump Boots",
                                "Spider Ball",
                            ]
                        }
                    ],
                    "note": "The turrets become active after the pirates have been defeated and the room reloaded (2nd pass layer). A scan dash may be used to cross the gap but is not in no tricks.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "1004",
                    "y": "323"
                }
            }
        ],
        "agon_wastes_temple": [
            {
                "name": "Mining Station B",
                "item": {
                    "id": "mine-station-b",
                    "original": "Dark Burst",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Boost Ball",
                                "Space Jump Boots",
                                "Dark Beam",
                                "Light Beam",
                                "Seeker Launcher"
                            ]
                        }, {
                            "group": [
                                "Morph Ball Bomb",
                                "Boost Ball",
                                "Space Jump Boots",
                                "Dark Beam",
                                "Annihilator Beam",
                                "Seeker Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "213",
                    "y": "528"
                }
            },
            {
                "name": "Storage A",
                "item": {
                    "id": "storage-a",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Power Bomb",
                                "Dark Beam",
                                "Light Beam",
                                "Seeker Launcher",
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "287",
                    "y": "657"
                }
            },
            {
                "name": "Mine Shaft",
                "item": {
                    "id": "mine-shaft",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "439",
                    "y": "561"
                }
            },
            {
                "name": "Agon Temple",
                "item": {
                    "id": "agon-temple",
                    "original": "Morph Ball Bomb",
                    "requirements": [

                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "Only initiate this fight if you have at least one of the required items, if you have no checks left, or if you have saved the game. The gates may softlock you otherwise.<br><br>The Space Jump Boots can be used to hop over the gates.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "635",
                    "y": "585"
                }
            },
            {
                "name": "Agon Energy Controller",
                "item": {
                    "id": "agon-energy",
                    "original": "Amber Translator",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "605",
                    "y": "120"
                }
            },
            {
                "name": "Sandcanyon",
                "item": {
                    "id": "sandcanyon",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Power Bomb",
                                "Light Beam",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "992",
                    "y": "590"
                }
            }
        ],
        "agon_wastes_command_center": [
            {
                "name": "Storage B",
                "item": {
                    "id": "Storage B",
                    "original": "Missile Expansion",
                    "requirements": [{
                        "group": [
                            "Dark Beam",
                            "Missile Launcher"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "110",
                    "y": "830"
                }
            }, {
                "name": "Command Center",
                "item": {
                    "id": "command-center",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Missile Launcher"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb",
                                "Missile Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "195",
                    "y": "570"
                }
            }, {
                "name": "Ventilation Area A",
                "item": {
                    "id": "vent-area-a",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Light Beam"
                            ]
                        }, {
                            "group": [
                                "Morph Ball Bomb",
                                "Power Bomb"
                            ]
                        }
                    ],
                    "note": "If elevators are randomized and Transport to Sanctuary Fortress is accessible, then the Power Bombs are required (at least) instead of the Light Beam.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "131",
                    "y": "224"
                }
            }, {
                "name": "Storage D",
                "item": {
                    "id": "storage-d",
                    "original": "Dark Beam",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam"
                            ]
                        }
                    ],
                    "note": "Do not enter the room unless you have the Dark Beam, know it is here, or have saved the game. The door on the other side is Dark, and you may softlock.<br><br>Only the Dark Beam is required to access this item from Security Station B.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "179",
                    "y": "287"
                }
            }, {
                "name": "Main Reactor",
                "item": {
                    "id": "Main-Reactor",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Spider Ball",
                                "Boost Ball",
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Light Beam",
                                "Spider Ball",
                                "Boost Ball",
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Space Jump Boots",
                                "Spider Ball",
                                "Boost Ball",
                                "Morph Ball Bomb",
                                "Missile Launcher"
                            ]
                        }
                    ],
                    "note": "Spider tracks only activate once Dark Samus 1 has been killed.<br><br>Space Jump Boots + Missiles are only required if coming from Sand Processing.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "295",
                    "y": "220"
                }
            }, {
                "name": "Sand Processing",
                "item": {
                    "id": "sand-processing",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Boost Ball",
                                "Morph Ball Bomb",
                                "Missile Launcher",
                                "Space Jump Boots"
                            ]
                        },
                        {
                            "group": [
                                "Boost Ball",
                                "Morph Ball Bomb",
                                "Missile Launcher",
                                "Dark Beam"
                            ]
                        }
                    ],
                    "note": "Dark Beam required if approaching item from Security Station B.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "400",
                    "y": "308"
                }
            }, {
                "name": "Storage C",
                "item": {
                    "id": "storage-c",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Spider Ball",
                                "Boost Ball",
                                "Missile Launcher",
                                "Super Missile"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "475",
                    "y": "600"
                }
            }, {
                "name": "Bioenergy Production",
                "item": {
                    "id": "bioen",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Space Jump Boots",
                                "Missile Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "380",
                    "y": "690"
                }
            }
        ],
        "torvus_upper": [
            {
                "name": "Torvus Energy Controller",
                "item": {
                    "id": "torv-energy-con",
                    "original": "Emerald Translator",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Super Missile",
                            "Morph Ball Bomb"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "85",
                    "y": "740"
                }
            },
            {
                "name": "Torvus Temple",
                "item": {
                    "id": "torv-temple",
                    "original": "Super Missile",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Morph Ball Bomb"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "370",
                    "y": "715"
                }
            },
            {
                "name": "Temple Access",
                "item": {
                    "id": "temple-access",
                    "original": "Energy Tank",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Morph Ball Bomb"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "620",
                    "y": "715"
                }
            },
            {
                "name": "Great Bridge",
                "item": {
                    "id": "great-bridge",
                    "original": "Power Bomb Expansion",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Morph Ball Bomb",
                            "Power Bomb"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "802",
                    "y": "695"
                }
            },
            {
                "name": "Portal Chamber",
                "item": {
                    "id": "portal-chamber",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Dark Beam",
                                "Annihilator Beam",
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb",
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb"
                            ]
                        },
                        {
                            "group": [
                                "Power Bomb",
                                "Annihilator Beam",
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "note": "The Annihilator Beam may be used to activate the portals in place of the Light Beam. Accessible from Dark Torvus via either the Super Missile door or the Power Bomb door at Dark Forgotten Bridge.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "830",
                    "y": "660"
                }
            },
            {
                "name": "Path of Roots",
                "item": {
                    "id": "path-of-roots",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Grapple Beam"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "885",
                    "y": "730"
                }
            },
            {
                "name": "Torvus Lagoon",
                "item": {
                    "id": "torvus-lagoon",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Gravity Boost"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "1010",
                    "y": "666"
                }
            },
            {
                "name": "Abandoned Worksite",
                "item": {
                    "id": "abandoned-worksite",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Grapple Beam"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "763",
                    "y": "601"
                }
            },
            {
                "name": "Forgotten Bridge",
                "item": {
                    "id": "forgotten-bridge",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "You can skip going to Dark Aether to move the bridge if you have the Screw Attack.<br><br>It is also possible to scan dash off the portal to access this platform.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "745",
                    "y": "540"
                }
            },
            {
                "name": "Torvus Grove",
                "item": {
                    "id": "torvus-grove",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Power Bomb",
                                "Missile Launcher",
                                "Super Missile",
                                "Emerald Translator", 
                                "Emerald Translator"
                            ]
                        }
                    ],
                    "note": "This item is locked behind two translator gates of the same color, but if gates are randomized, they may be different colors. Hence the visor is shown twice.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "370",
                    "y": "370"
                }
            },
            {
                "name": "Meditation Vista",
                "item": {
                    "id": "meditation-vista",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Missile Launcher",
                                "Super Missile",
                                "Emerald Translator", 
                                "Emerald Translator",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "note": "This item is locked behind two translator gates of the same color, but if gates are randomized, they may be different colors. Hence the visor is shown twice.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "470",
                    "y": "245"
                }
            },
            {
                "name": "Torvus Plaza",
                "item": {
                    "id": "torvus-plaza",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Missile Launcher",
                                "Super Missile", 
                                "Emerald Translator",
                                "Emerald Translator",
                                "Boost Ball",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "note": "This item is locked behind two translator gates of the same color, but if gates are randomized, they may be different colors. Hence the visor is shown twice.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "718",
                    "y": "29"
                }
            },
            {
                "name": "Plaza Access",
                "item": {
                    "id": "plaza-access",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Missile Launcher",
                                "Super Missile",
                                "Emerald Translator",
                                "Emerald Translator",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "note": "This item is locked behind two translator gates of the same color, but if gates are randomized, they may be different colors. Hence the visor is shown twice.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "774",
                    "y": "228"
                }
            },
            {
                "name": "Underground Tunnel",
                "item": {
                    "id": "underground-tunnel",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Missile Launcher",
                                "Super Missile",
                                "Emerald Translator",
                                "Emerald Translator"
                            ]
                        }
                    ],
                    "note": "This item is locked behind two translator gates of the same color, but if gates are randomized, they may be different colors. Hence the visor is shown twice.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "400",
                    "y": "610"
                }
            }
        ],
        "torvus_lower": [
            {
                "name": "Hydrodynamo Station",
                "item": {
                    "id": "hydro-station",
                    "original": "Missile Expansion",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Super Missile",
                            "Morph Ball Bomb",
                            "Emerald Translator",
                            "Space Jump Boots"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "526",
                    "y": "586"
                }
            }, {
                "name": "Hydrochamber Storage",
                "item": {
                    "id": "hydro-storage",
                    "original": "Gravity Boost",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Super Missile",
                            "Morph Ball Bomb",
                            "Emerald Translator",
                            "Space Jump Boots",
                            "Seeker Missile"
                        ]
                    }],
                    "note": "Avoid coming down to this area without the Gravity Boost. You may become softlocked.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "90",
                    "y": "835"
                }
            }, {
                "name": "Gathering Hall",
                "item": {
                    "id": "gathering-hall",
                    "original": "Missile Expansion",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Super Missile",
                            "Morph Ball Bomb",
                            "Emerald Translator",
                            "Space Jump Boots",
                            "Seeker Launcher",
                            "Power Bomb",
                            "Boost Ball"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "267",
                    "y": "790"
                }
            }, {
                "name": "Transit Tunnel South",
                "item": {
                    "id": "trans-tunnel-s",
                    "original": "Missile Expansion",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Annihilator Beam",
                            "Super Missile",
                            "Morph Ball Bomb",
                            "Emerald Translator",
                            "Space Jump Boots",
                            "Seeker Launcher"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "500",
                    "y": "910"
                }
            }, {
                "name": "Transit Tunnel East",
                "item": {
                    "id": "trans-tunnel-e",
                    "original": "Energy Tank",
                    "requirements": [{
                        "group": [
                            "Missile Launcher",
                            "Dark Beam",
                            "Light Beam",
                            "Super Missile",
                            "Morph Ball Bomb",
                            "Emerald Translator",
                            "Space Jump Boots",
                            "Seeker Launcher",
                            "Boost Ball"
                        ]
                    }],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "745",
                    "y": "470"
                }
            }, {
                "name": "Training Chamber",
                "item": {
                    "id": "training-chamber",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Dark Beam",
                                "Light Beam",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Emerald Translator",
                                "Space Jump Boots",
                                "Seeker Launcher",
                                "Spider Ball",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "525",
                    "y": "275"
                }
            }
        ],
        "sanctuary_upper": [
            {
                "name": "Dynamo Works",
                "item": {
                    "id": "dynamo-works",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Cobalt Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Grapple Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher"
                            ]
                        }, {
                            "group": [
                                "Cobalt Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Screw Attack",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "880",
                    "y": "370"
                }
            },
            {
                "name": "Spider Guardian",
                "item": {
                    "id": "spider-guardian",
                    "original": "Spider Ball",
                    "requirements": [
                        {
                            "group": [
                                "Cobalt Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Grapple Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Boost Ball"
                            ]
                        }, {
                            "group": [
                                "Cobalt Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Screw Attack",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "940",
                    "y": "400"
                }
            },
            {
                "name": "Temple Access",
                "item": {
                    "id": "temp-access",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "675",
                    "y": "460"
                }
            },
            
            {
                "name": "Sentinels Path",
                "item": {
                    "id": "sent-path",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Screw Attack",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Annihilator Beam"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Spider Ball",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Annihilator Beam"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Grapple Beam",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Annihilator Beam"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "535",
                    "y": "555"
                }
            },
            {
                "name": "Vault",
                "item": {
                    "id": "vault",
                    "original": "Screw Attack",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Grapple Beam",
                                "Spider Ball"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "122",
                    "y": "258"
                }
            },
            {
                "name": "Watch Station",
                "item": {
                    "id": "watch-station",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "473",
                    "y": "305"
                }
            },
            {
                "name": "Watch Station Access",
                "item": {
                    "id": "watch-station-acc",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Spider Ball"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "530",
                    "y": "365"
                }
            },
            {
                "name": "Main Gyro Chamber",
                "item": {
                    "id": "main-gyro",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Echo Visor"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "667",
                    "y": "286"
                }
            },
            {
                "name": "Aerie",
                "item": {
                    "id": "aerie",
                    "original": "Echo Visor",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Spider Ball",
                                "Boost Ball"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Space Jump Boots",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Spider Ball",
                                "Boost Ball",
                                "Echo Visor"
                            ]
                        }
                    ],
                    "note": "Do not enter Aerie unless you have the Echo Visor, know it is in this check, or have saved the game. You may softlock otherwise.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "550",
                    "y": "95"
                }
            }
        ],
        "sanctuary_lower": [
            {
                "name": "Sanctuary Entrance",
                "item": {
                    "id": "sanc-entrance",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Violet Translator",
                                "Amber Translator",
                                "Emerald Translator",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Power Bomb",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        },
                        {
                            "group": [
                                "Light Beam",
                                "Power Bomb",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Missile Launcher",
                                "Dark Visor",
                                "Seeker Launcher",
                                "Emerald Translator",
                                "Emerald Translator",
                            ]
                        },
                        {
                            "group": [
                                "Light Beam",
                                "Power Bomb",
                                "Boost Ball",
                                "Spider Ball",
                                "Violet Translator",
                                "Violet Translator",
                                "Emerald Translator",
                                "Space Jump Boots"
                            ]
                        }

                    ],
                    "note": "Requirement #1: pathway from Temple Transport C, through Meeting Grounds to Grand Windchamber and then GFMC Compound. Includes the gate in Great Temple. <br><br>Requirement #2: pathway from Temple Transport A, through Sacred Path. Includes the gate in Great Temple. <br><br>Requirement #3: Path from Temple Transport B through Communication Area to GFMC Compound. Includes gate in Great Temple.<br><br>Room must be reloaded after the initial Pirate Commando fight in order to make the Kinetic Orb Cannons functional.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "930",
                    "y": "615"
                }
            },
            {
                "name": "Reactor Core",
                "item": {
                    "id": "reactor-core",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Light Beam",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Gravity Boost",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Dark Visor",
                                "Missile Launcher",
                                "Super Missile",
                                "Seeker Launcher"
                            ]
                        }

                    ],
                    "note": "Requirement #1: Sanctuary Entrance.<br><br>Requirement #2: Transport to Torvus Bog.<br><br>Tracker assumes you have the translators to move past Sanctuary Entrance (Emerald at a minimum for vanilla) or have arrived via Transport to Torvus Bog (also Emerald for vanilla).",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "530",
                    "y": "230"
                }
            },
            {
                "name": "Main Research",
                "item": {
                    "id": "main-research",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Light Beam",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher"
                            ]
                        }

                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "330",
                    "y": "215"
                }
            },
            {
                "name": "Central Area Transport West",
                "item": {
                    "id": "cent-a-trans-w",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Echo Visor",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher"
                            ]
                        },
                        {
                            "group": [
                                "Light Beam",
                                "Annihilator Beam",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Grapple Beam"
                            ]
                        },
                        {
                            "group": [
                                "Light Beam",
                                "Annihilator Beam",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Screw Attack"
                            ]
                        }

                    ],
                    "note": "Requirement #1: Defeat the Caretaker Class Drone to unlock the upper door in Main Research.<br><br>Requirements #2 / #3: Come from Sentinels Path.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "210",
                    "y": "235"
                }
            },
            {
                "name": "Transit Station",
                "item": {
                    "id": "transit-station",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Boost Ball",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher"
                            ]
                        }

                    ],
                    "note": "Can be accessed without the Dark Beam if you have the Screw Attack. Not considered in no tricks logic.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "440",
                    "y": "240"
                }
            },
            {
                "name": "Sanctuary Map Station",
                "item": {
                    "id": "sanc-map-station",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Cobalt Translator",
                                "Light Beam",
                                "Boost Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Light Suit"
                            ]
                        }

                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "505",
                    "y": "154"
                }
            },
            {
                "name": "Hall of Combat Mastery",
                "item": {
                    "id": "hall-combat-mastery",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Spider Ball",
                                "Space Jump Boots",
                                "Dark Visor",
                                "Missile Launcher",
                                "Seeker Launcher"
                            ]
                        }

                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "850",
                    "y": "115"
                }
            }
        ],
        "dark_agon_west": [
            {
                "name": "Ing Cache 4",
                "item": {
                    "id": "ing-cache-4",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "129",
                    "y": "566"
                }
            }, {
                "name": "Crossroads",
                "item": {
                    "id": "crossroads",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "455",
                    "y": "815"
                }
            }, {
                "name": "Junction Site",
                "item": {
                    "id": "junction-site",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "445",
                    "y": "645"
                }
            }, {
                "name": "Trial Tunnel",
                "item": {
                    "id": "trial-tunnel",
                    "original": "Dark Agon Key 1",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "495",
                    "y": "370"
                }
            }, {
                "name": "Dark Agon Temple",
                "item": {
                    "id": "dark-agon-temple",
                    "original": "Dark Suit",
                    "requirements": [
                        {
                            "group": [
                                "Dark Agon Key",
                                "Dark Agon Key",
                                "Dark Agon Key",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "If you beat Amorbis without Space Jump Boots, you may get softlocked if that is not the item. With the Dark Beam, you can shoot the crystal and stand on it with a single jump to get out but this is not in logic.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "607",
                    "y": "405"
                }
            }, {
                "name": "Judgment Pit",
                "item": {
                    "id": "judgment-pit",
                    "original": "Space Jump Boots",
                    "requirements": [
                        {
                            "group": [
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "590",
                    "y": "685"
                }
            }
        ],
        "dark_agon_east": [
            {
                "name": "Warrior's Walk",
                "item": {
                    "id": "warriors-walk",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Space Jump Boots"
                            ]
                        },

                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Power Bomb",
                                "Dark Beam",
                                "Light Beam",
                                "Dark Suit"
                            ]
                        }
                    ],
                    "note": "Requirement #1: From Judgment Pit.<br><br>Requirement #2: From Battleground. Dark Suit may be required due to the area damage.<br><br>Consider also having at least 2 Energy Tanks due to the Phazon pit.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "206",
                    "y": "430"
                }
            },
            {
                "name": "Battleground (Ing Cache)",
                "item": {
                    "id": "battle-ground-cache",
                    "original": "Sky Temple Key 1",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Dark Visor"
                            ]
                        },
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Dark Visor"
                            ]
                        }
                    ],
                    "note": "Requirement #2: You can jump on top of the Ing Pods to get up to the higher level.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "275",
                    "y": "450"
                }
            },
            {
                "name": "Battleground",
                "item": {
                    "id": "battle-ground",
                    "original": "Dark Agon Key 3",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        },
                        {
                            "group": [
                                "Missile Launcher",
                                "Dark Beam",
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                            ]
                        }
                    ],
                    "note": "Requirement #1: From Judgment Pit. Recommended to have a few Energy Tanks.<br><br>Requirement #2: From Doomed Entry.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "334",
                    "y": "441"
                }
            },
            {
                "name": "Doomed Entry",
                "item": {
                    "id": "doomed-entry",
                    "original": "Dark Agon Key 2",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "630",
                    "y": "430"
                }
            },
            {
                "name": "Feeding Pit",
                "item": {
                    "id": "feeding-pit",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "630",
                    "y": "760"
                }
            },
            {
                "name": "Ing Cache 1",
                "item": {
                    "id": "ing-cache-1",
                    "original": "Light Beam",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb"
                            ]
                        }
                    ],
                    "note": "Coming in the room without the Light Beam is a potential softlock.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "555",
                    "y": "815"
                }
            },
            {
                "name": "Ing Cache 2",
                "item": {
                    "id": "ing-cache-2",
                    "original": "Sonic Boom",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "1015",
                    "y": "530"
                }
            },
            {
                "name": "Dark Oasis",
                "item": {
                    "id": "dark-oasis",
                    "original": "Sky Temple Key 2",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Power Bomb",
                                "Space Jump Boots",
                                "Light Suit"
                            ]
                        }
                    ],
                    "note": "This item does not appear until the Power Bomb Guardian in Torvus Bog has been defeated.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "745",
                    "y": "65"
                }
            }
        ],
        "dark_torvus_upper": [
            {
                "name": "Cache B",
                "item": {
                    "id": "cache-b",
                    "original": "Energy Tank",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "270",
                    "y": "735"
                }
            },
            {
                "name": "Dark Torvus Temple",
                "item": {
                    "id": "dark-torvus-temple",
                    "original": "Dark Visor",
                    "requirements": [
                        {
                            "group": [
                                "Dark Torvus Key",
                            "Dark Torvus Key",
                            "Dark Torvus Key",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "note": "Do not enter this area unless you know the item dropped is the Dark Beam, have no checks remaining, or have saved the game.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "388",
                    "y": "722"
                }
            },
            {
                "name": "Venomous Pond",
                "item": {
                    "id": "venomous-pond",
                    "original": "Dark Torvus Key 3",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Grapple Beam"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Grapple Beam"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "630",
                    "y": "715"
                }
            },
            {
                "name": "Cache A",
                "item": {
                    "id": "cache-a",
                    "original": "Beam Ammo Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Seeker Launcher"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Seeker Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "830",
                    "y": "720"
                }
            },
            {
                "name": "Poisoned Bog",
                "item": {
                    "id": "poisoned-bog",
                    "original": "Sky Temple Key 3",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Dark Visor",
                                "Light Suit"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Dark Visor",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "885",
                    "y": "670"
                }
            },
            {
                "name": "Putrid Alcove",
                "item": {
                    "id": "putrid-alcove",
                    "original": "Power Bomb Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Power Bomb",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "note": "Recommended to have a few Energy Tanks due to area damage and poison water.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "777",
                    "y": "600"
                }
            },
            {
                "name": "Dark Torvus Arena",
                "item": {
                    "id": "dark-torvus-arena",
                    "original": "Dark Torvus Key 1",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "Avoid coming into this area without the Boost Ball or you may get stuck.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "645",
                    "y": "180"
                }
            },
            {
                "name": "Boost Ball Guardian",
                "item": {
                    "id": "boost-ball-guardian",
                    "original": "Boost Ball",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "note": "Avoid coming into this area without the Boost Ball or you may get stuck.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "630",
                    "y": "55"
                }
            }
        ],
        "dark_torvus_lower": [
            {
                "name": "Power Bomb Guardian",
                "item": {
                    "id": "pb-guardian",
                    "original": "Power Bomb",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "115",
                    "y": "720"
                }
            }, {
                "name": "Undertemple",
                "item": {
                    "id": "Undertemple",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "85",
                    "y": "570"
                }
            },
            {
                "name": "Undertemple Access",
                "item": {
                    "id": "Undertemple-access",
                    "original": "Dark Torvus Key 2",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "230",
                    "y": "370"
                }
            },
            {
                "name": "Dungeon",
                "item": {
                    "id": "dungeon",
                    "original": "Sky Temple Key 4",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "1065",
                    "y": "835"
                }
            },
            {
                "name": "Undertransit One",
                "item": {
                    "id": "undertransit-one",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "420",
                    "y": "375"
                }
            },
            {
                "name": "Sacrificial Chamber",
                "item": {
                    "id": "sacrificial-chamber",
                    "original": "Sky Temple Key 4",
                    "requirements": [
                        {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Power Bomb"
                            ]
                        },{
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Grapple Beam"
                            ]
                        }, {
                            "group": [
                                "Emerald Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "note": "You can get softlocked in this room without either the Power Bombs, the Grapple Beam, or Screw Attack.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "770",
                    "y": "150"
                }
            }
        ],
        "ing_hive_upper": [
            {
                "name": "Quadraxis",
                "item": {
                    "id": "quadraxis",
                    "original": "Annihilator Beam",
                    "requirements": [
                        {
                            "group": [
                                "Ing Hive Key",
                                "Ing Hive Key",
                                "Ing Hive Key",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Spider Ball",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "660",
                    "y": "615"
                }
            },
            {
                "name": "Aerial Training Site",
                "item": {
                    "id": "ATS",
                    "original": "Ing Hive Key 3",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "430",
                    "y": "440"
                }
            },
            {
                "name": "Aerial Training Site ",
                "item": {
                    "id": "ATS ",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "470",
                    "y": "340"
                }
            },
            {
                "name": "Hive Gyro Chamber",
                "item": {
                    "id": "hive-gyro-chamber",
                    "original": "Ing Hive Key 2",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Spider Ball",
                                "Boost Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "655",
                    "y": "285"
                }
            },
            {
                "name": "Hive Dynamo Works",
                "item": {
                    "id": "hive-dynamo-works",
                    "original": "Sky Temple Key 6",
                    "requirements": [
                        {
                            "group": [
                                "Cobalt Translator",
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Visor",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Spider Ball",
                                "Boost Ball",
                                "Power Bomb"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "815",
                    "y": "380"
                }
            }
        ],
        "ing_hive_lower": [
            {
                "name": "Hive Entrance",
                "item": {
                    "id": "hive-entrance",
                    "original": "Sky Temple Key 5",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Boost Ball",
                                "Power Bomb",
                                "Spider Ball",
                                "Light Suit",
                                "Dark Visor",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "550",
                    "y": "835"
                }
            },
            {
                "name": "Culling Chamber",
                "item": {
                    "id": "culling-chamber",
                    "original": "Ing Hive Key 1",
                    "requirements": [
                        {
                            "group": [
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots",
                                "Spider Ball"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "935",
                    "y": "180"
                }
            },
            {
                "name": "Hazing Cliff",
                "item": {
                    "id": "hazing-cliff",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Light Beam",
                                "Morph Ball Bomb",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "1230",
                    "y": "245"
                }
            }
        ],
        "sky_temple_grounds": [
            {
                "name": "Defiled Shrine",
                "item": {
                    "id": "defiled-shrine",
                    "original": "Sky Temple Key 8",
                    "requirements": [
                        {
                            "group": [
                                "Missile Launcher",
                                "Super Missile",
                                "Morph Ball Bomb", 
                                "Dark Beam",
                                "Light Beam",
                                "Dark Visor",
                                "Space Jump Boots"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "note": "The Dark Missile Trooper does not appear until the Bomb Guardian has been killed.",
                    "actual": "",
                    "x": "260",
                    "y": "815"
                },
            },
            {
                "name": "Accursed Lake",
                "item": {
                    "id": "accursed-lake",
                    "original": "Sky Temple Key 9",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Dark Suit",
                                "Dark Visor"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "660",
                    "y": "835"
                },
                "requirements": []
            },
            {
                "name": "Profane Path",
                "item": {
                    "id": "profane-path",
                    "original": "Beam Ammo Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Missile Launcher",
                                "Space Jump Boots",
                                "Echo Visor"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "405",
                    "y": "325"
                }
            },
            {
                "name": "Ing Reliquary",
                "item": {
                    "id": "ing-reliquary",
                    "original": "Sky Temple Key 7",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Space Jump Boots",
                                "Grapple Beam",
                                "Dark Visor",
                                "Light Suit"
                            ]
                        },
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Annihilator Beam",
                                "Missile Launcher",
                                "Seeker Launcher",
                                "Space Jump Boots",
                                "Screw Attack",
                                "Dark Visor",
                                "Light Suit"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "595",
                    "y": "475"
                }
            },
            {
                "name": "Phazon Grounds",
                "item": {
                    "id": "phazon-grounds",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Space Jump Boots",
                                "Screw Attack"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "525",
                    "y": "20"
                }
            },
            {
                "name": "War Ritual Grounds",
                "item": {
                    "id": "war-ritual-grounds",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Missile Launcher",
                                "Space Jump Boots",
                                "Super Missile",
                                "Dark Visor",
                                "Seeker Launcher"
                            ]
                        }
                    ],
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "255",
                    "y": "580"
                }
            },
            {
                "name": "Plain of Dark Worship",
                "item": {
                    "id": "plain-of-dark-worship",
                    "original": "Missile Expansion",
                    "requirements": [
                        {
                            "group": [
                                "Dark Beam",
                                "Light Beam",
                                "Dark Suit"
                            ]
                        }
                    ],
                    "note": "You can brute force your way through to this check if you have ample Energy Tanks and possibly also the Boost Ball.",
                    "collected": "false",
                    "accessible": "false",
                    "actual": "",
                    "x": "565",
                    "y": "580"
                }
            }
        ]
    }

];

var gates = [
    {
        "temple_grounds_hive_light": [
            {
                "id": "Hive Access Tunnel",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "445",
                "y": "230",
                "update": [
                    {
                        "area": "temple_grounds_hive_light",
                        "room": "Hive Chamber A",
                        "id": 0
                    }
                ]
            }, {
                "id": "Hive Transport Area",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "551",
                "y": "184",
                "update": [
                    {
                        "area": "temple_grounds_hive_light",
                        "room": "Hive Chamber A",
                        "id": 1
                    }
                ]
            }, {
                "id": "Industrial Site",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "805",
                "y": "234",
                "update": [
                    {
                        "area": "temple_grounds_hive_light",
                        "room": "Transport to Agon Wastes",
                        "id": 0
                    }
                ]
            }
        ],
        "temple_grounds_north_light": [
            {
                "id": "Path of Eyes",
                "original": "Amber Translator",
                "actual": "Amber Translator",
                "x": "55",
                "y": "590"
            },
            {
                "id": "Meeting Grounds",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "300",
                "y": "715",
                "update": [
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 0
                    }
                ]
            },
            {
                "id": "Temple Assembly Site",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "715",
                "y": "700",
                "update": [
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 5
                    }
                ]
            },
            {
                "id": "GFMC Compound",
                "original": "Emerald Translator",
                "actual": "Emerald Translator",
                "x": "529",
                "y": "109",
                "update": [
                    {
                        "area": "temple_grounds_north_light",
                        "room": "Fortress Transport Access",
                        "id": 0
                    },
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 2
                    },
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 6
                    },
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 9
                    }
                ]
            }
        ],
        "great_temple": [
            {
                "id": "Transport B Access",
                "original": "Violet Translator",
                "actual": "Violet Translator",
                "x": "645",
                "y": "500",
                "update": [
                    {
                        "area": "great_temple",
                        "room": "Transport B Access",
                        "id": 0
                    },
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 4
                    }
                ]
            }, {
                "id": "Transport C Access",
                "original": "Amber Translator",
                "actual": "Amber Translator",
                "x": "445",
                "y": "500",
                "update": [
                {
                    "area": "sanctuary_lower",
                    "room": "Sanctuary Entrance",
                    "id": 1
                }
            ]

            }, {
                "id": "Transport A Access",
                "original": "Emerald Translator",
                "actual": "Emerald Translator",
                "x": "545",
                "y": "390",
                "update": [
                    {
                        "area":"great_temple",
                        "room": "Transport A Access",
                        "id": 1
                    },
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Entrance",
                        "id": 8
                    }
                ]
            }
        ],
        "agon_wastes_mines": [
            {
                "id": "Mining Plaza",
                "original": "Amber Translator",
                "actual": "Amber Translator",
                "x": "375",
                "y": "205"
            }, {
                "id": "Mining Station A",
                "original": "Amber Translator",
                "actual": "Amber Translator",
                "x": "760",
                "y": "405",
                "update": [
                    {
                        "area": "agon_wastes_mines",
                        "room": "Sand Cache",
                        "id": 0
                    }
                ]
            }
        ],
        "torvus_upper": [
            {
                "id": "Torvus Temple",
                "original": "Emerald Translator",
                "actual": "Emerald Translator",
                "x": "430",
                "y": "705",
                "update": [
                    {
                        "area": "torvus_upper",
                        "room": "Torvus Grove",
                        "id": 7
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Meditation Vista",
                        "id": 6
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Torvus Plaza",
                        "id": 6
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Plaza Access",
                        "id": 6
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Underground Tunnel",
                        "id": 6
                    },
                    {
                        "area": "torvus_lower",
                        "room": "Hydrodynamo Station",
                        "id": 5
                    },
                    {
                        "area": "torvus_lower",
                        "room": "Hydrochamber Storage",
                        "id": 5
                    },
                    {
                        "area": "torvus_lower",
                        "room": "Gathering Hall",
                        "id": 5
                    },
                    {
                        "area": "torvus_lower",
                        "room": "Transit Tunnel South",
                        "id": 6
                    },
                    {
                        "area": "torvus_lower",
                        "room": "Transit Tunnel East",
                        "id": 5
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Undertemple",
                        "id": 0
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Power Bomb Guardian",
                        "id": 0
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Undertemple Access",
                        "id": 0
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Dungeon",
                        "id": 0
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Undertransit One",
                        "id": 0
                    },
                    {
                        "area": "dark_torvus_lower",
                        "room": "Sacrificial Chamber",
                        "id": 0
                    }
                ]
            }, {
                "id": "Underground Tunnel",
                "original": "Emerald Translator",
                "actual": "Emerald Translator",
                "x": "405",
                "y": "673",
                "update": [
                    {
                        "area": "torvus_upper",
                        "room": "Torvus Grove",
                        "id": 8
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Meditation Vista",
                        "id": 7
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Torvus Plaza",
                        "id": 7
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Plaza Access",
                        "id": 7
                    },
                    {
                        "area": "torvus_upper",
                        "room": "Underground Tunnel",
                        "id": 7
                    }
                ]
            }, {
                "id": "Great Bridge",
                "original": "Emerald Translator",
                "actual": "Emerald Translator",
                "x": "715",
                "y": "770"
            }
        ],
        "sanctuary_upper": [
            {
                "id": "Sanctuary Temple",
                "original": "Cobalt Translator",
                "actual": "Cobalt Translator",
                "x": "740",
                "y": "587",
                "update": [
                    {
                        "area": "sanctuary_upper",
                        "room": "Dynamo Works",
                        "id": 0
                    },
                    {
                        "area": "sanctuary_upper",
                        "room": "Spider Guardian",
                        "id": 0
                    },
                    {
                        "area": "ing_hive_upper",
                        "room": "Hive Dynamo Works",
                        "id": 0
                    }
                ]
            }

        ],
        "sanctuary_lower": [
            {
                "id": "Reactor Core",
                "original": "Cobalt Translator",
                "actual": "Cobalt Translator",
                "x": "505",
                "y": "320",
                "update": [
                    {
                        "area": "sanctuary_lower",
                        "room": "Sanctuary Map Station",
                        "id": 0
                    }
                ]
            }

        ]
    }
];

var currentArea, currentGates;

var userItems = [];

$(document).ready(function () {

    function PlaceItems(area) {
        //clear the previous items and navigation buttons
        $(".item, .nav, .gate").remove();

        //place navigation buttons, load bg image
        if (area == "Temple Grounds Splinter Hive Light") {
            currentArea = rooms[0].temple_grounds_hive_light;
            currentGates = gates[0].temple_grounds_hive_light;

            $("#map").attr("src", "images/tg-hive-light.png");
            $("#main").append("<img class=\"nav\" id=\"temple-grounds-north\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 50px; margin-top: 50px;\">");
            $("#temple-grounds-north").click(function () {
                PlaceItems("Temple Grounds North Light");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        //place navigation buttons, load bg image
        else if (area == "Temple Grounds North Light") {
            currentArea = rooms[0].temple_grounds_north_light;
            currentGates = gates[0].temple_grounds_north_light;

            $("#map").attr("src", "images/tg-north-light.png");
            $("#main").append("<img  class=\"nav\" id=\"temple-grounds-hive\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 1000px; margin-top: 800px;\">");
            $("#temple-grounds-hive").click(function () {
                PlaceItems("Temple Grounds Splinter Hive Light");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        else if (area == "Great Temple") {
            currentArea = rooms[0].great_temple;
            currentGates = gates[0].great_temple;

            $("#map").attr("src", "images/great-temple.png");
            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        else if (area == "Agon Wastes Mines") {
            currentArea = rooms[0].agon_wastes_mines;
            currentGates = gates[0].agon_wastes_mines;

            $("#map").attr("src", "images/agon_wastes_mines.png");

            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-temple\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 400px; margin-top: 20px;\">");
            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-command-center\" src=\"images/right-arrow.png\" style=\"position: fixed; margin-left: 1000px; margin-top: 500px;\">");
            $("#agon-wastes-temple").click(function () {
                PlaceItems("Agon Wastes Temple");
            });

            $("#agon-wastes-command-center").click(function () {
                PlaceItems("Agon Wastes Command Center");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }


        }

        else if (area == "Agon Wastes Temple") {
            currentArea = rooms[0].agon_wastes_temple;
            currentGates = gates[0].agon_wastes_temple;

            $("#map").attr("src", "images/agon_wastes_temple.png");

            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-mines\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 400px; margin-top: 800px;\">");
            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-command-center\" src=\"images/right-arrow.png\" style=\"position: fixed; margin-left: 900px; margin-top: 200px;\">");
            $("#agon-wastes-mines").click(function () {
                PlaceItems("Agon Wastes Mines");
            });

            $("#agon-wastes-command-center").click(function () {
                PlaceItems("Agon Wastes Command Center");
            });

        }

        else if (area == "Agon Wastes Command Center") {
            currentArea = rooms[0].agon_wastes_command_center;
            currentGates = gates[0].agon_wastes_command_center;

            $("#map").attr("src", "images/agon_wastes_command_center.png");

            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-temple\" src=\"images/left-arrow.png\" style=\"position: fixed; margin-left: 900px; margin-top: 200px;\">");
            $("#main").append("<img  class=\"nav\" id=\"agon-wastes-mines\" src=\"images/left-arrow.png\" style=\"position: fixed; margin-left: 900px; margin-top: 800px;\">");
            $("#agon-wastes-mines").click(function () {
                PlaceItems("Agon Wastes Mines");
            });

            $("#agon-wastes-temple").click(function () {
                PlaceItems("Agon Wastes Temple");
            });
        }

        else if (area == "Torvus Bog Upper") {
            currentArea = rooms[0].torvus_upper;
            currentGates = gates[0].torvus_upper;

            $("#map").attr("src", "images/torvus_upper.png");

            $("#main").append("<img  class=\"nav\" id=\"torvus-lower\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 200px; margin-top: 500px;\">");

            $("#torvus-lower").click(function () {
                PlaceItems("Torvus Bog Lower");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        else if (area == "Torvus Bog Lower") {
            currentArea = rooms[0].torvus_lower;
            currentGates = gates[0].torvus_lower;

            $("#map").attr("src", "images/torvus_lower.png");

            $("#main").append("<img  class=\"nav\" id=\"torvus-upper\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 200px; margin-top: 200px;\">");

            $("#torvus-upper").click(function () {
                PlaceItems("Torvus Bog Upper");
            });
        }

        else if (area == "Sanctuary Upper") {
            currentArea = rooms[0].sanctuary_upper;
            currentGates = gates[0].sanctuary_upper;

            $("#map").attr("src", "images/sanctuary_upper.png");

            $("#main").append("<img  class=\"nav\" id=\"sanctuary-lower\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 300px; margin-top: 500px;\">");

            $("#sanctuary-lower").click(function () {
                PlaceItems("Sanctuary Lower");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        else if (area == "Sanctuary Lower") {
            currentArea = rooms[0].sanctuary_lower;
            currentGates = gates[0].sanctuary_lower;

            $("#map").attr("src", "images/sanctuary_lower.png");

            $("#main").append("<img  class=\"nav\" id=\"sanctuary-upper\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 300px; margin-top: 500px;\">");

            $("#sanctuary-upper").click(function () {
                PlaceItems("Sanctuary Upper");
            });

            for (var i = 0; i < currentGates.length; i++) {
                $("#main").append("<img id=\"" + currentGates[i].id + "\" alt=\"" + currentGates[i].actual + "\" class=\"gate\" src=\"images/" + currentGates[i].actual + ".gif\" style=\"position: fixed; margin-left:" + currentGates[i].x + "px; margin-top:" + currentGates[i].y + "px;\">");
            }
        }

        // DARK AETHER
        else if (area == "Sky Temple Grounds") {
            currentArea = rooms[0].sky_temple_grounds;
            currentGates = gates[0].sky_temple_grounds;
            $("#map").attr("src", "images/sky_temple_grounds.png");
        }

        else if (area == "Sky Temple") {
            currentArea = rooms[0].sky_temple;
            currentGates = gates[0].sky_temple;
            $("#map").attr("src", "images/sky_temple.png");
        }

        else if (area == "Dark Agon Wastes West") {
            currentArea = rooms[0].dark_agon_west;
            currentGates = gates[0].dark_agon_west;

            $("#map").attr("src", "images/dark_agon_west.png");

            $("#main").append("<img  class=\"nav\" id=\"dark-agon-east\" src=\"images/right-arrow.png\" style=\"position: fixed; margin-left: 700px; margin-top: 500px;\">");

            $("#dark-agon-east").click(function () {
                PlaceItems("Dark Agon Wastes East");
            });
        }

        else if (area == "Dark Agon Wastes East") {
            currentArea = rooms[0].dark_agon_east;
            currentGates = gates[0].dark_agon_east;

            $("#map").attr("src", "images/dark_agon_east.png");

            $("#main").append("<img  class=\"nav\" id=\"dark-agon-east\" src=\"images/left-arrow.png\" style=\"position: fixed; margin-left: 100px; margin-top: 500px;\">");

            $("#dark-agon-east").click(function () {
                PlaceItems("Dark Agon Wastes West");
            });
        }

        else if (area == "Dark Torvus Bog Upper") {
            currentArea = rooms[0].dark_torvus_upper;
            currentGates = gates[0].dark_torvus_upper;

            $("#map").attr("src", "images/dark_torvus_upper.png");

            $("#main").append("<img  class=\"nav\" id=\"dark-torvus-lower\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 100px; margin-top: 500px;\">");

            $("#dark-torvus-lower").click(function () {
                PlaceItems("Dark Torvus Bog Lower");
            });
        }

        else if (area == "Dark Torvus Bog Lower") {
            currentArea = rooms[0].dark_torvus_lower;
            currentGates = gates[0].dark_torvus_lower

            $("#map").attr("src", "images/dark_torvus_lower.png");

            $("#main").append("<img  class=\"nav\" id=\"dark-torvus-upper\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 100px; margin-top: 500px;\">");

            $("#dark-torvus-upper").click(function () {
                PlaceItems("Dark Torvus Bog Upper");
            });
        }

        else if (area == "Ing Hive Upper") {
            currentArea = rooms[0].ing_hive_upper;
            currentGates = gates[0].ing_hive_upper;

            $("#map").attr("src", "images/ing_hive_upper.png");

            $("#main").append("<img  class=\"nav\" id=\"ing-hive-lower\" src=\"images/down-arrow.png\" style=\"position: fixed; margin-left: 250px; margin-top: 500px;\">");

            $("#ing-hive-lower").click(function () {
                PlaceItems("Ing Hive Lower");
            });
        }

        else if (area == "Ing Hive Lower") {
            currentArea = rooms[0].ing_hive_lower;
            currentGates = gates[0].ing_hive_lower

            $("#map").attr("src", "images/ing_hive_lower.png");

            $("#main").append("<img  class=\"nav\" id=\"ing-hive-upper\" src=\"images/up-arrow.png\" style=\"position: fixed; margin-left: 250px; margin-top: 500px;\">");

            $("#ing-hive-upper").click(function () {
                PlaceItems("Ing Hive Upper");
            });
        }


        //place the item icons based on stored information
        for (var i = 0; i < currentArea.length; i++) {
            var x =
                currentArea[i].item.x;
            var y =
                currentArea[i].item.y;
            var ID =
                currentArea[i].item.id;

            //place a white orb if no item has been noted nor collected
            if (currentArea[i].item.actual == "" && currentArea[i].item.collected == "false") {
                $("#main").append("<img id=\"" + ID + "\" class=\"item\" src=\"images/item-collectible.png\" style=\"position: fixed; margin-left:" + x + "px; margin-top:" + y + "px;\">");
            }

            //place a green orb if an item has been collected and there is no indicated item
            else if (currentArea[i].item.actual == "" && currentArea[i].item.collected == "true") {
                $("#main").append("<img id=\"" + ID + "\" class=\"item\" src=\"images/item-collected.png\" style=\"position: fixed; margin-left:" + x + "px; margin-top:" + y + "px;\">");
            }

            //place the actual item icon if it hasn't been collected
            else if (currentArea[i].item.actual != "" && currentArea[i].item.collected == "false") {
                $("#main").append("<img id=\"" + ID + "\" class=\"item\" src=\"images/" + currentArea[i].item.actual
                    + ".gif\" style=\"position: fixed; margin-left:" + x + "px; margin-top:" + y + "px;\">");
            }

            //place a green orb if the item has been collected and the item was marked
            else if (currentArea[i].item.actual != "" && currentArea[i].item.collected == "true") {
                $("#main").append("<img id=\"" + ID + "\" class=\"item\" src=\"images/item-collected.png\" style=\"position: fixed; margin-left:" + x + "px; margin-top:" + y + "px;\">");
            }
        }

        //listen for mouse inputs
        var timeOut = 0;
        $('.item').on('mousedown ', function (e) {
            switch (e.which) {
                //left click
                case 1:
                    //mark the item as collected or not
                    for (var i = 0; i < currentArea.length; i++) {
                        if (currentArea[i].item.id == $(this).attr("id")) {
                            //place a green orb to indicated it was collected
                            if (currentArea[i].item.collected == "false") {
                                $(this).attr("src", "images/item-collected.png");
                                currentArea[i].item.collected = "true";
                            }
                            //place a white orb to undo the collection and no item was marked
                            else if (currentArea[i].item.collected == "true" && currentArea[i].item.actual == "") {
                                $(this).attr("src", "images/item-collectible.png");
                                currentArea[i].item.collected = "false";
                            }

                            //place the item icon to undo the collection if it was marked prior
                            else if (currentArea[i].item.collected == "true" && currentArea[i].item.actual != "") {

                                $(this).attr("src", "images/"+currentArea[i].item.actual+".gif");
                                currentArea[i].item.collected = "false";
                            }
                        }
                    }
                    break;

                //middle click
                case 2:

                    //don't add another box if there is one already p:
                    if (!$("#original-name").length) {
                        //find the item data for what we middle clicked
                        //to show the original item and what it is, if marked
                        for (var i = 0; i < currentArea.length; i++) {
                            if (currentArea[i].item.id == $(this).attr("id")) {
                                if (currentArea[i].item.actual == "") {
                                    $("#main").before("<div id=\"original-name\"><h2>" + currentArea[i].name + "</h2><b>Original</b>: " + currentArea[i].item.original + "<br /><b>Actual: ???</b><br /></div>");
                                }

                                else {
                                    $("#main").before("<div id=\"original-name\"><h2>" + currentArea[i].name + "</h2><b>Original</b>: " + currentArea[i].item.original + "<br /><b>Actual</b>: " + currentArea[i].item.actual + "<br /></div>");
                                }

                                if (currentArea[i].item.requirements != undefined) {
                                    $("#original-name").append("<hr /><h2 id=\"req\" title=\"Possible vanilla requirements. A plus indicates these are required together.\">Requirements</h2><div id=\"requirements\">");
                                    for (var j = 0; j < currentArea[i].item.requirements.length; j++) {
                                        $("#original-name").append("<b>" + (j + 1) + ")</b> ");
                                        for (var k = 0; k < currentArea[i].item.requirements[j].group.length; k++) {
                                            $("#original-name").append("<img src=\"images/" + currentArea[i].item.requirements[j].group[k] + ".gif\" />");
                                            if (k < currentArea[i].item.requirements[j].group.length - 1) {
                                                $("#original-name").append(" + ");
                                            }

                                            else {
                                                $("#original-name").append("<br />");
                                            }
                                        }
                                    }
                                    $("#original-name").append("</div>");

                                }

                                else {
                                    $("#original-name").append("<hr /><h2id=\"req\" title=\"Possible vanilla requirements. A plus indicates these are required together.\">Requirements</h2><p>None.</p>");
                                }

                                if (currentArea[i].item.note != undefined) {
                                    $("#original-name").append("<hr /><h2>Notes</h2><p id=\"note\">" + currentArea[i].item.note + "</p>");
                                }
                            }
                        }

                        //remove the popup when we're not holding middle click anymore
                        $("#main").click(function () {
                            $("#original-name").remove();
                            $("#main").unbind();
                        });

                        //prevent the browser from doing normal middle click functions
                        return false;
                    }

                    break;
            }
        });

        
        //right click time
        $(".item").contextmenu(function () {
            $("#clear").unbind();
            //show the item context menu
            $("#item-menu").css("display", "block");
            //store the item that was clicked
            var _this = $(this);

            

            //handle input on the new menu
            $("#item-menu .icon").click(function () {
                //set the item originally clicked to the new item when it is clicked
                _this.attr("src", $(this).attr("src"));

                //used to access the current item further down
                var clearTemp;

                //update the data
                for (var i = 0; i < currentArea.length; i++) {
                    if (currentArea[i].item.id == _this.attr("id")) {
                        currentArea[i].item.actual = $(this).attr("alt");
                        currentArea[i].item.collected = "false";
                        clearTemp = i;
                    }
                }

                //clear the item when clear is clicked on
            });

            $("#clear").click(function () {
                $(".item").each(function (i) {
                    if ($(this).attr("id") == _this.attr("id")) {
                        _this.attr("src", "images/item-collectible.png");
                        currentArea[i].item.actual = "";
                        currentArea[i].item.collected = "false";
                    }
                });
            });

            //hide the menu when clicked off of and unbind the icons
            $("#main").click(function () {
                $("#item-menu").css("display", "none");
                $("#item-menu .icon").off();
            });
            return false;
        });



        $(".gate").click(function () {
            if ($(this).attr("alt") == "Violet Translator") {
                $(this).attr("src", "images/Amber Translator.gif");
                $(this).attr("alt", "Amber Translator");
            }

            else if ($(this).attr("alt") == "Amber Translator") {
                $(this).attr("src", "images/Emerald Translator.gif");
                $(this).attr("alt", "Emerald Translator");
            }

            else if ($(this).attr("alt") == "Emerald Translator") {
                $(this).attr("src", "images/Cobalt Translator.gif");
                $(this).attr("alt", "Cobalt Translator");
            }


            else if ($(this).attr("alt") == "Cobalt Translator") {
                $(this).attr("src", "images/Violet Translator.gif");
                $(this).attr("alt", "Violet Translator");
            }

            var currentGate;

            for (var i = 0; i < currentGates.length; i++) {
                if ($(this).attr("id") == currentGates[i].id) {
                    currentGates[i].actual = $(this).attr("alt");
                    currentGate = i;
                }
            }

            //Now update the visor requirements if there any
            //ONLY do this if there are rooms to update
            if (currentGates[currentGate].update.length) {
                //go through all items in the area
                for (var m = 0; m < currentGates[currentGate].update.length; m++) {
                    currentArea = eval("rooms[0]." + currentGates[currentGate].update[m].area);
                    for (var j = 0; j < currentArea.length; j++) {
                        //if the room name matches the things we want to update
                        if (currentArea[j].name == currentGates[currentGate].update[m].room) {
                            //start looking for the visors in the requirements
                            for (var k = 0; k < currentArea[j].item.requirements.length; k++) {
                                var l = currentGates[currentGate].update[m].id;


                                    if (currentArea[j].item.requirements[k].group[l] == "Violet Translator"
                                        || currentArea[j].item.requirements[k].group[l] == "Amber Translator"
                                        || currentArea[j].item.requirements[k].group[l] == "Emerald Translator"
                                        || currentArea[j].item.requirements[k].group[l] == "Cobalt Translator") {

                                        if (currentGates[currentGate].actual != currentArea[j].item.requirements[k].group[l]) {
                                            currentArea[j].item.requirements[k].group[l] = currentGates[currentGate].actual;
                                        }
                                    }
                            }
                        }
                    }
                }

                PlaceItems(area);
            }
        });
    }

    //initially begin here
    PlaceItems("Temple Grounds Splinter Hive Light");

    //navigate to the places below when text is clicked
    $("#tg").click(function () {
        PlaceItems("Temple Grounds Splinter Hive Light");
    });

    $("#gt").click(function () {
        PlaceItems("Great Temple");
    });

    $("#agon").click(function () {
        PlaceItems("Agon Wastes Mines");
    });

    $("#torvus").click(function () {
        PlaceItems("Torvus Bog Upper");
    });

    $("#sanc").click(function () {
        PlaceItems("Sanctuary Lower");
    });

    $("#stg").click(function () {
        PlaceItems("Sky Temple Grounds");
    });

    $("#sky").click(function () {
        PlaceItems("Sky Temple");
    });

    $("#dark-agon").click(function () {
        PlaceItems("Dark Agon Wastes West");
    });

    $("#dark-torvus").click(function () {
        PlaceItems("Dark Torvus Bog Upper");
    });

    $("#ing-hive").click(function () {
        PlaceItems("Ing Hive Lower");
    });

    $("#controls img.icon").click(function () {
        if ($(this).css("opacity") == 0.25) {
            $(this).css("opacity", "1");
        }

        else {
            $(this).css("opacity", "0.25");
        }
    });

    $("#guide, #guide-close").click(function () {
        $("#guide-box").toggle();
    });

});
