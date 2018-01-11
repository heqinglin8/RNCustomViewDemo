package com.autohome.reactnativedemo.viewmanager;

import android.app.ActionBar;
import android.view.Gravity;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.autohome.reactnativedemo.R;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * 作者/author：何清林（Administrator）
 * 时间/time：2018-2018/1/11-17:07
 * 邮箱/email：237607591@qq.com
 */
public class TopbarViewManager extends ViewGroupManager<RelativeLayout> {
    private ReactInstanceManager mReactInstanceManager;


    @Override
    public String getName() {
        return "TopbarView";
    }

    @Override
    protected RelativeLayout createViewInstance(ThemedReactContext reactContext) {
        RelativeLayout viewLayout = new RelativeLayout(reactContext);
        viewLayout.setBackgroundColor(reactContext.getResources()
                .getColor(android.R.color.white));
        viewLayout.setGravity(Gravity.CENTER_VERTICAL);

        ImageView backIV = new ImageView(reactContext);
        backIV.setImageResource(R.mipmap.back);
        viewLayout.addView(backIV);
        RelativeLayout.LayoutParams params = (RelativeLayout.LayoutParams) backIV.getLayoutParams();
        params.addRule(RelativeLayout.CENTER_VERTICAL);
        backIV.setLayoutParams(params); //使layout更新

        TextView titleTV = new TextView(reactContext);
        titleTV.setText("title");
        titleTV.setTextSize(16);
        titleTV.setTextColor(reactContext.getResources()
                .getColor(android.R.color.black));
        viewLayout.addView(titleTV);
        RelativeLayout.LayoutParams params1 = (RelativeLayout.LayoutParams) titleTV.getLayoutParams();
        params1.addRule(RelativeLayout.CENTER_IN_PARENT);
        titleTV.setLayoutParams(params1); //使layout更新

        TextView rightTV = new TextView(reactContext);
        rightTV.setText("rightTV");
        rightTV.setTextSize(16);
        rightTV.setTextColor(reactContext.getResources()
                .getColor(android.R.color.black));
        viewLayout.addView(rightTV);
        RelativeLayout.LayoutParams params2 = (RelativeLayout.LayoutParams) rightTV.getLayoutParams();
        params2.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
        rightTV.setLayoutParams(params2); //使layout更新

        return viewLayout;
    }

    public void setReactInstanceManager(ReactInstanceManager reactInstanceManager) {
        mReactInstanceManager = reactInstanceManager;
    }

}
