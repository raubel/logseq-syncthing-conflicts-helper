import type { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settingsSchema: SettingSchemaDesc[] = [
    {
        key: 'conflictPageName',
        title: 'Conflict Page Name',
        description: 'Name of the page where conflict reports are stored',
        type: 'string',
        default: 'Syncthing Conflicts Report'
    }
];
