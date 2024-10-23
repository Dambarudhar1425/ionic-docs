---
```
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SimpleGame extends JPanel {
  public SimpleGame() {
    setBackground(Color.BLACK);
    setPreferredSize(new Dimension(800, 600));
  }

  public void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.WHITE);
    g.drawString("Hello, World!", 100, 100);
  }

  public static void main(String[] args) {
    JFrame frame = new JFrame("Simple Game");
    frame.add(new SimpleGame());
    frame.pack();
    frame.setVisible(true);
  }
}
```
*Example 2: JavaFX Game*
```
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.text.Text;

public class JavaFXGame extends Application {
  public void start(Stage primaryStage) {
    Pane root = new Pane();
    root.getChildren().add(new Text("Hello, World!", 100, 100));
    Scene scene = new Scene(root, 800, 600, Color.BLACK);
    primaryStage.setTitle("JavaFX Game");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}
```
*Example 3: libGDX Game*
```
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;

public class libGDXGame extends ApplicationAdapter {
  private Texture texture;

  public void create() {
    texture = new Texture("image.png");
  }

  public void render() {
    Gdx.gl.glClearColor(1, 0, 0, 1);
    Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
    batch.begin();
    batch.draw(texture, 0, 0);
    batch.end();
  }
}
```
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

   
title: "ion-toolbar"
---
import Props from '@ionic-internal/component-api/v8/toolbar/props.md';
import Events from '@ionic-internal/component-api/v8/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v8/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v8/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toolbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toolbar/slots.md';

<head>
  <title>ion-toolbar: Customize App Menu Toolbar Buttons and Icons</title>
  <meta name="description" content="Ion-toolbar component lets you customize toolbar buttons on your app menu. Add fixed toolbars above or below content or use full screen to scroll with content." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toolbars are generally positioned above or below content and provide content and actions for the current screen. When placed within the [content](./content), toolbars will scroll with the content.

Toolbars can contain several different components including titles, buttons, icons, back buttons, menu buttons, searchbars, segments, progress bars, and more.


## Basic Usage

It is recommended to put a toolbar inside of a [header](./header) or [footer](./footer) for proper positioning. When a toolbar is placed in a header it will appear fixed at the top of the content. When it is placed in a footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. A [title](./title) component can be used to display text inside of the toolbar.

import Basic from '@site/static/usage/v8/toolbar/basic/index.md';

<Basic />


## Buttons in Toolbars

Buttons placed in a toolbar should be placed inside of the [buttons](./buttons) component. The buttons component can be positioned inside of the toolbar using a named [slot](#slots). The `"primary"` and `"secondary"` slots behave differently in `ios` and `md` mode.

The buttons component can wrap a standard [button](./button), [back button](./back-button), [menu button](./menu-button), or several of any of them. A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](./button#fill) property on the button. The properties included on back button and menu button in this example are for display purposes; see their respective documentation for proper usage.

import Buttons from '@site/static/usage/v8/toolbar/buttons/index.md';

<Buttons />


## Searchbars in Toolbars

A [searchbar](./searchbar) can be placed inside of a toolbar to search through the content. It should be the only child component of the toolbar, and will take up the full width and height.

import Searchbars from '@site/static/usage/v8/toolbar/searchbars/index.md';

<Searchbars />


## Segments in Toolbars

[Segments](./segment) are generally used in toolbars to toggle between two different content views on the same page. They can be placed in a toolbar with other components, such as buttons, but should not be placed alongside a title.

import Segments from '@site/static/usage/v8/toolbar/segments/index.md';

<Segments />


## Progress Bars in Toolbars

A [progress bar](./progress-bar) is used as a loading indicator to show an ongoing process in an app. Progress bars can be placed with any other components inside of a toolbar as they will align with the bottom of the toolbar.

import ProgressBars from '@site/static/usage/v8/toolbar/progress-bars/index.md';

<ProgressBars />


## Theming

### Colors

import Colors from '@site/static/usage/v8/toolbar/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v8/toolbar/theming/css-properties/index.md';

<CSSProps />


## Borders

In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top.


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
