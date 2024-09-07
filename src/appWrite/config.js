import conf from "../conf/conf";
import { Client,Databases,Storage,ID, Query } from "appwrite";

export class Services{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
  
    async createPost({title,slug,content,featuredImage,status,userID}){
       try {
          return await this.database.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                slug,
                content,
                featuredImage,
                status,
                userID
            }
          )
       } catch (error) {
        console.log('Appwrite server error :: createPost', error);
       }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
              slug,
              {
                title,
                content,
                featuredImage,
                status
              }
            )
        }catch(error){
            console.log('Appwrite server error :: updatePost', error);
        }
    }


    async deletePost(slug){
        try {
            await this.database.deleteDocument(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
              slug,
            )
            return true
        } catch (error) {
            console.log('Appwrite server error :: deletePost', error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
              slug
            )

        } catch (error) {
            console.log('Appwrite server error :: getPost', error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.database.listDocuments(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
              queries
            )
        } catch (error) {
            console.log('Appwrite server error :: getPosts', error);
        }
    }

//  Upload services
    async uploadFile(file){
         try {
            return await this.bucket.createFile(
              conf.appWriteBucketId,
              ID.unique(),
              file
            )
         } catch (error) {
            console.log('Appwrite server error :: uploadFile', error);
            return false
         }
    }
    
    async deleteFile(fileID){
        try {
             await this.bucket.deleteFile(
              conf.appWriteBucketId,
              fileID
            )
            return true
        } catch (error) {
            console.log('Appwrite server error :: deleteFile', error);
            return false
        }
    }

     getFilePreview(fileID){
         return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileID
         )
     }
}

const services = new Services()

export default services