import { Document, Model, model, Schema } from "mongoose";


const CompanySchema = new Schema({
    name: {
        type: String
    }
});


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICompanySchema extends Document {
    name: string
}

// Virtuals
CompanySchema.virtual('companyName').get(function() {
    return this.name;
});
// Methods


interface ICompanyBase extends ICompanySchema {
    name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICompany extends ICompanySchema {
    // ...
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICompany_populated extends ICompanySchema {
    // ...
}

// static methods
CompanySchema.statics.findName = async function (name: string): Promise<ICompany> {
    return this.name;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICompanyModel extends Model<ICompany> {
    findName(name: string): Promise<ICompany>
}

// Query middlewares
CompanySchema.post("findOneAndUpdate", async function(doc) {
    // await updateCompanyReference(doc);
});

export default model<ICompany, ICompanyModel>('Company', CompanySchema);
