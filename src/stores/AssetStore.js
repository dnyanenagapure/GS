import { makeAutoObservable,observable } from 'mobx';

class AssetStore {
    assets = [
        { name: 'Cash, Deposits & Money Market Funds', value: 84026 },
        { name: 'Fixed Income', value: 199738 },
        { name: 'Public Equity', value: 183116 }
    ]; // default state

    data = [
        { date: new Date('2024-02-01'), value: 683000 },
        { date: new Date('2024-05-30'), value: 567000 },
        { date: new Date('2024-06-30'), value: 458463 },
        { date: new Date('2025-02-01'), value: 467255 }
    ];

    constructor() {
        makeAutoObservable(this,{assets: observable, data: observable}); 
        // makeAutoObservable(this,{data: observable}); 
    }

    updateAsset(index, value) {
        this.assets[index].value = value;
    }
}

const assetStore = new AssetStore();// we never use store directly instead we always pass the instance of the store to component
export default assetStore;