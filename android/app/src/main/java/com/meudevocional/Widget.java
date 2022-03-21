package com.meudevocional;

import android.annotation.SuppressLint;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.DrawableContainer;
import android.graphics.drawable.DrawableWrapper;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.ShapeDrawable;
import android.widget.LinearLayout;
import android.widget.RemoteViews;
import android.content.SharedPreferences;

import androidx.appcompat.content.res.AppCompatResources;
import androidx.core.content.ContextCompat;
import androidx.core.content.res.ResourcesCompat;
import androidx.core.graphics.drawable.DrawableCompat;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Implementation of App Widget functionality.
 */
public class Widget extends AppWidgetProvider {
    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        try {
            Intent intent = new Intent(context, MainActivity.class);
            PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);

            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPref.getString("appData", "{\"text\":'Meu Devocional'}");
            JSONObject appData = new JSONObject(appString);
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget);

            views.setTextViewText(R.id.appwidget_text, appData.getString("text"));
            views.setTextViewText(R.id.appwidget_date, appData.getString("date"));

            setTextColors(views, appData.getString("color"));
            setBackground(views, appData.getString("background"));

            views.setOnClickPendingIntent(R.id.appwidget_wrapper, pendingIntent);
            appWidgetManager.updateAppWidget(appWidgetId, views);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private static void setTextColors(RemoteViews views, String color) {
        views.setTextColor(R.id.appwidget_text, Color.parseColor(color));
        views.setTextColor(R.id.appwidget_date, Color.parseColor(color));
    }

    private static void setBackground(RemoteViews views, String background) {
        switch (background){
            case "amarelo1":
                views.setInt(R.id.appwidget_wrapper, "setBackgroundResource", R.drawable.app_widget_background_yellow1);
                break;
            case "amarelo2":
                views.setInt(R.id.appwidget_wrapper, "setBackgroundResource", R.drawable.app_widget_background_yellow2);
                break;
            case "amarelo3":
                views.setInt(R.id.appwidget_wrapper, "setBackgroundResource", R.drawable.app_widget_background_yellow3);
                break;
            default:
                views.setInt(R.id.appwidget_wrapper, "setBackgroundResource", R.drawable.app_widget_background_green);
                break;
        }
    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    @Override
    public void onEnabled(Context context) {
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget);

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String currentDate = sdf.format(new Date());

        views.setTextViewText(R.id.appwidget_date, currentDate);
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}