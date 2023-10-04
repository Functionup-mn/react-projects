const config = {
      appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
      appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
      appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
      appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
      appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export default config;

// this file gives always string value due to String() function

// it is production grade approach so you should use it