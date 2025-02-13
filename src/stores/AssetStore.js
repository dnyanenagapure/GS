import { makeAutoObservable,observable } from 'mobx';

class AssetStore {
    assets = [
        { name: 'Cash, Deposits & Money Market Funds', value: 84026 },
        { name: 'Fixed Income', value: 199738 },
        { name: 'Public Equity', value: 183116 }
    ]; // default state

    constructor() {
        makeAutoObservable(this,{assets: observable}); 
    }

    updateAsset(index, value) {
        this.assets[index].value = value;
    }
}

const assetStore = new AssetStore();// we never use store directly instead we always pass the instance of the store to component
export default assetStore;
