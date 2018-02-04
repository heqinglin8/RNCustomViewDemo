package com.autohome.reactnativedemo;

import com.autohome.reactnativedemo.viewmanager.TopbarViewManager;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class DemoPackage implements ReactPackage {

    private DemoViewManager mDemoViewManager;
    private TopbarViewManager mTopbarViewManager;

    public DemoPackage() {
        mDemoViewManager = new DemoViewManager();
        mTopbarViewManager = new TopbarViewManager();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> nativeModules = new ArrayList<>();
        return nativeModules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(mDemoViewManager);
        viewManagers.add(mTopbarViewManager);
        return viewManagers;
    }

    public void setReactInstanceManager(ReactInstanceManager reactInstanceManager) {
        mDemoViewManager.setReactInstanceManager(reactInstanceManager);
        mTopbarViewManager.setReactInstanceManager(reactInstanceManager);
    }
}
