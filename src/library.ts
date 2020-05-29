import axios from 'axios'; 

export default class NodeManager {
    private nodeManagerUrl;

    /**
     * Represents a nodeManager instance that will be controlled via REST
     * @param {string} nodeManagerUrl - The HTTP URL and port to the nodeManager instance
     */
    constructor (nodeManagerUrl : string) {
        this.nodeManagerUrl = nodeManagerUrl;
    }

    /**
     * Can be used to check if a specified address contains an Ethereum contract
     * @param {string} contractAddress - contract address on the blockchain
     * @returns A Promise with a boolean that is true if the contract exists
     */
    public async checkIfContractExists(contractAddress: string) : Promise<boolean> {
        let result = await axios.get(this.nodeManagerUrl + "/checkIfContractExists/" + contractAddress);
        return result.data;
    }

    /**
     * Can be used to call a Smart Contract function. 
     * This function expects a Web3.Transaction object as the parameter
     * @param {Transaction} tx - Transaction Object
     * @returns a promise with the predicted transaction hash
     */
    public async callFunction(tx) : Promise<string> {
        let response = await axios.post(this.nodeManagerUrl + "/callFunction", tx);
        return response.data;
    }

    /**
     * Can be used to send a transaction
     * This function expects a Web3.Transaction object as the parameter
     * @param {Transaction} tx - Transaction Object
     * @returns a promise with the predicted transaction hash
     */
    public async sendTx(tx) : Promise<string> {
        let response = await axios.post(this.nodeManagerUrl + "/sendTx", tx);
        return response.data;
    }

    /**
     * Can be used to wait for a transaction
     * The function uses long polling and the promise will resolve once the transaction is mined
     * @param {string} tx - transaction address 
     * @returns a Promise with the TransactionReceipt object that resolves once the transaction is mined. 
     */
    public async waitForTx(tx) : Promise<string> {
        let response = await axios.get(this.nodeManagerUrl + '/waitForTx/' + tx);
        return response.data;
    }

    /**
     * Can be used to get the address of the account that is configured in the bc node manager instance
     * @returns a promise with the account address as a string
     */
    public async getAccountAddress() : Promise<string> {
        let response = await axios.get(this.nodeManagerUrl + '/getAccountAddress');
        return response.data;
    }

}