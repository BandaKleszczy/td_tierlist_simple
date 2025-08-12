// service-worker.js
const CACHE_NAME = 'td-tierlist-cache-v1';

// Lista plików do cache'owania
const ASSETS = [
  '/td_tierlist_simple.html',
  // heroes
  '/heroes/Quincy.png',
  '/heroes/QuincyCyber.png',
  '/heroes/Gwendolin.png',
  '/heroes/GwendolinScientist.png',
  '/heroes/StrikerJones.png',
  '/heroes/BikerBones.png',
  '/heroes/ObynGreenFoot.png',
  '/heroes/OceanObyn.png',
  '/heroes/CaptainChurchill.png',
  '/heroes/SentaiChurchill.png',
  '/heroes/Benjamin.png',
  '/heroes/DjBenJammin.png',
  '/heroes/Ezili.png',
  '/heroes/SmudgeCatEzili.png',
  '/heroes/PatFusty.png',
  '/heroes/FustyTheSnowman.png',
  '/heroes/Jericho.png',
  '/heroes/HighwaymanJericho.png',
  '/heroes/StarCaptainJericho.png',
  '/heroes/Adora.png',
  '/heroes/FateweaverAdora.png',
  '/heroes/Etienne.png',
  '/heroes/Beetienne.png',
  '/heroes/Bonnie.png',
  // towers
  '/towers/DartMonkey.png',
  '/towers/BoomerangMonkey.png',
  '/towers/BombShooter.png',
  '/towers/TackShooter.png',
  '/towers/IceMonkey.png',
  '/towers/SniperMonkey.png',
  '/towers/MonkeySub.png',
  '/towers/MonkeyBuccaneer.png',
  '/towers/MonkeyAce.png',
  '/towers/HeliPilot.png',
  '/towers/MortarMonkey.png',
  '/towers/DartlingGunner.png',
  '/towers/WizardMonkey.png',
  '/towers/SuperMonkey.png',
  '/towers/NinjaMonkey.png',
  '/towers/Alchemist.png',
  '/towers/Druid.png',
  '/towers/BananaFarm.png',
  '/towers/SpikeFactory.png',
  '/towers/MonkeyVillage.png',
  '/towers/EngineerMonkey.png',
  // maps
  '/maps/Banana Depot.png',
  '/maps/Basalt Columns.png',
  '/maps/Bloonstone Quarry.png',
  '/maps/Bot Factory.png',
  '/maps/Building Site.png',
  '/maps/Castle Ruins.png',
  '/maps/Cobra Command.png',
  '/maps/Dino Graveyard.png',
  '/maps/Garden.png',
  '/maps/Glade.png',
  '/maps/Inflection.png',
  '/maps/Koru.png',
  '/maps/Neo Highway.png',
  '/maps/Oasis.png',
  '/maps/Off Tide.png',
  '/maps/Pirate Cove.png',
  '/maps/Ports.png',
  '/maps/Precious Space.png',
  '/maps/Salmon Ladder.png',
  '/maps/Sands of Time.png',
  '/maps/Splashdown.png',
  '/maps/Star.png',
  '/maps/Street Party.png',
  '/maps/Sun Palace.png',
  '/maps/Times Up.png'
];

// Instalacja SW i zapis plików do cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Obsługa żądań — najpierw cache, potem sieć
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
