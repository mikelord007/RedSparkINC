import userModel from '../models/User.js';
import chatModel from '../models/Chat.js';

export const checkUserInContact = async (chatObj, recipient) => {
    let present = false
    
    const data = await userModel.findById(chatObj.to)

    const updatedContacts = data.contacts.map(element => {
        if(element.id === chatObj.from)
            {   present = true
                element.listingRef = recipient.listingRef;
            }
        return element
    });
    data.contacts = updatedContacts

    if(!present){
        const newContact = { id: chatObj.from, name: chatObj.fromName, listingRef: recipient.listingRef, listingOwner: recipient.listingOwner?false:true}

        data.contacts.push(newContact)
    }

    await userModel.findByIdAndUpdate(chatObj.to, data)

}