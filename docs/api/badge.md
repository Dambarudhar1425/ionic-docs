---
title: "ion-badge"
---
import Props from '@ionic-internal/component-api/v8/badge/props.md';
import Events from '@ionic-internal/component-api/v8/badge/events.md';
import Methods from '@ionic-internal/component-api/v8/badge/methods.md';
import Parts from '@ionic-internal/component-api/v8/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/badge/slots.md';
Dost, social media coding java mein kuch interesting topics hai!

*Social Media Integration in Java*

1. Facebook API
2. Twitter API
3. Instagram API
4. LinkedIn API
5. Google+ API (deprecated)

*Java Libraries for Social Media*



```
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;

public class FacebookLogin {
  public static void main(String[] args) {
    FacebookSdk.sdkInitialize();
    LoginManager loginManager = LoginManager.getInstance();
    loginManager.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
      @Override
      public void onSuccess(LoginResult loginResult) {
        System.out.println("Login successful!");
      }
      
      @Override
      public void onCancel() {
        System.out.println("Login cancelled!");
      }
      
      @Override
      public void onError(FacebookException error) {
        System.out.println("Login error!");
      }
    });
  }
}
```
```
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.auth.AccessToken;

public class TwitterPost {
  public static void main(String[] args) {
    Twitter twitter = TwitterFactory.getSingleton();
    AccessToken accessToken = new AccessToken("your_access_token", "your_access_token_secret");
    twitter.setOAuthAccessToken(accessToken);
    
    try {
      twitter.updateStatus("Hello, world!");
      System.out.println("Tweet posted!");
    } catch (TwitterException e) {
      System.out.println("Tweet error!");
    }
  }
}
```

<head>
  <title>ion-badge: iOS & Android App Notification Badge Icons</title>
  <meta name="description" content="Badges are inline block elements that appear near other elements on iOS & Android apps—use ion-badges as notifications that indicate how many items there are." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are. Badges are hidden if no content is passed in.

## Basic Usage

import Basic from '@site/static/usage/v8/badge/basic/index.md';

<Basic />

## Theming

### Colors

import Colors from '@site/static/usage/v8/badge/theming/colors/index.md';

<Colors />

### CSS Properties

import CSSProps from '@site/static/usage/v8/badge/theming/css-properties/index.md';

<CSSProps />

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
