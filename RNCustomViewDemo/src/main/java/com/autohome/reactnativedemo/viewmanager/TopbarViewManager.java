package com.autohome.reactnativedemo.viewmanager;

import android.app.ActionBar;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.autohome.reactnativedemo.R;
import com.autohome.reactnativedemo.utils.ScreenUtils;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * 作者/author：何清林（Administrator）
 * 时间/time：2018-2018/1/11-17:07
 * 邮箱/email：237607591@qq.com
 */
public class TopbarViewManager extends ViewGroupManager<RelativeLayout> {
    private ReactInstanceManager mReactInstanceManager;
    private TextView mTitleTV;
    private TextView mRightTV;


    @Override
    public String getName() {
        return "TopbarView";
    }

    @Override
    protected RelativeLayout createViewInstance(ThemedReactContext reactContext) {
//        RelativeLayout viewLayout = new RelativeLayout(reactContext);
//        viewLayout.setBackgroundColor(reactContext.getResources()
//                .getColor(android.R.color.white));
//        viewLayout.setPadding(ScreenUtils.dpToPxInt(reactContext, 15), 0, ScreenUtils.dpToPxInt(reactContext, 15), 0);
//        ImageView backIV = new ImageView(reactContext);
//        backIV.setImageResource(R.mipmap.back);
//        viewLayout.addView(backIV);
//        RelativeLayout.LayoutParams params = (RelativeLayout.LayoutParams) backIV.getLayoutParams();
//        params.addRule(RelativeLayout.CENTER_VERTICAL);
//        backIV.setLayoutParams(params); //使layout更新
//
//        mTitleTV = new TextView(reactContext);
//        mTitleTV.setText("title");
//        mTitleTV.setTextSize(16);
//        mTitleTV.setTextColor(reactContext.getResources()
//                .getColor(android.R.color.black));
//        viewLayout.addView(mTitleTV);
//        RelativeLayout.LayoutParams params1 = (RelativeLayout.LayoutParams) mTitleTV.getLayoutParams();
//        params1.addRule(RelativeLayout.CENTER_IN_PARENT);
//        mTitleTV.setLayoutParams(params1); //使layout更新
//
//        mRightTV = new TextView(reactContext);
//        mRightTV.setText("rightTV");
//        mRightTV.setTextSize(16);
//        mRightTV.setTextColor(reactContext.getResources()
//                .getColor(android.R.color.black));
//        viewLayout.addView(mRightTV);
//        RelativeLayout.LayoutParams params2 = (RelativeLayout.LayoutParams) mRightTV.getLayoutParams();
//        params2.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
//        params2.addRule(RelativeLayout.CENTER_VERTICAL);
//        mRightTV.setLayoutParams(params2); //使layout更新

        RelativeLayout viewLayout = (RelativeLayout) View.inflate(reactContext,R.layout.topbar_layout,null);

        mTitleTV = (TextView) viewLayout.findViewById(R.id.titleTV);
        mRightTV = (TextView) viewLayout.findViewById(R.id.rightTV);
        return viewLayout;
    }

    @ReactProp(name = "title")
    public void setTitle(RelativeLayout view, String text) {
        mTitleTV.setText(text);
    }

    @ReactProp(name = "righttext")
    public void setRightTxt(RelativeLayout view, String text) {
        mRightTV.setText(text);
    }

    public void setReactInstanceManager(ReactInstanceManager reactInstanceManager) {
        mReactInstanceManager = reactInstanceManager;
    }

}
