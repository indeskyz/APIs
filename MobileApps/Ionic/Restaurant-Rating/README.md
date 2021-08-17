# CRUD App built using Angular, TypeScript, & Ionic

- Similar to the React Native Application
- Allows for listing, adding, and updating visited places
- Provides a rating system so users can rate there visits
- Interacts with Google Maps API to allow a user to search for a location or to find where a visited resturant is located at

## To Run

- Get your API key from [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/get-api-key)

- After getting your API key navigate to _android/app/src/main/AndroidManifest.xml_:

  - Add this code block to your AndroidManifest.xml

```xml
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <!-- You will also only need to add this uses-library tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

- See the following based on your platform and if you are using Capictor or Cordova [Ionic Docs](https://ionicframework.com/docs/developing/android)

- After configuring your environment, cd into the project directory and run:

> npm install

- Now run using either Cordova or Capictor
