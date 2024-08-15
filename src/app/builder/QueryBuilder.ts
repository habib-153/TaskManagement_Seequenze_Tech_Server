import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T>{
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>){
        this.modelQuery = modelQuery
        this.query = query
    }

    search(searchableFields: string[]){
        const search =  this?.query?.searchTerm
        if(search){
            console.log(search)
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(field => ({
                    [field]: {
                        $regex: search, $options: 'i'
                    }
                }) as FilterQuery<T>)
            })
        }
        return this
    }

    filter(){
        const queryObj = { ...this.query }

        //filtering
        const excludeFields = ['searchTerm', 'sort', 'page', 'limit', 'fields', 'skip'];
        excludeFields.forEach((el) => delete queryObj[el]);
        if(queryObj!.priority){
            this.modelQuery = this.modelQuery.find({priority: queryObj?.priority} as FilterQuery<T>)
        }
        return this
    }

    
}

export default QueryBuilder