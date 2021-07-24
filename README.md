# RaidBots Companion - Google Chrome extension

Note: I am not the developer of [Raidbots](https://www.raidbots.com).

## Easy character customization on Raidbots.com

[Available for Chrome](https://chrome.google.com/webstore/detail/raidbots-companion/adeelgdknhinfliobghdonagfeghaipp)

The purpose of this simple extension is to allow you customize your character on Raidbots.com. This extension adds additional items in the SimC textarea used to examine your character. For instance, it can be especially useful before picking your weekly item from the vault, or to decide whether to chase PVP or PVE content. These items are mostly issued from the latest World of Warcraft expansion - Shadowlands.

## Specificities

- The JSON items database is fetched from remote server then stored in browser storage
- Added items are injected via JS in Raidbots textarea following the SimC syntax
- Extension developed with React
- Design via Bootstrap
- Tooltip from [WowHead](https://www.wowhead.com/)

## Changelog

### Version 1.6 (24-07-2021)

Update for the new patch: Sanctum of Domination.

- The extension has been migrated to Chrome manifest v3 and entirely refactorized
- Updated items database
- Better performance
- Possibility to add items with gems through right-click (e.g. haste, versatility, mastery and critical strike)

### Version 1.5 (03-03-2021)

First release: sort, filter and search for items that you can add to your Raidbots characters bag.
