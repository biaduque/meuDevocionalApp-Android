package com.meudevocional;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.widget.RemoteViews;
import android.content.SharedPreferences;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Implementation of App Widget functionality.
 */
public class Widget extends AppWidgetProvider {
    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        try {
            Intent intent = new Intent(context, MainActivity.class);
            PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);

            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPref.getString("appData", "{\"text\":'Não há dados'}");
            JSONObject appData = new JSONObject(appString);
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget);

            views.setTextViewText(R.id.appwidget_text, appData.getString("text"));
            views.setTextColor(R.id.appwidget_text, Color.parseColor(appData.getString("color")));
            views.setInt(R.id.appwidget_wrapper, "setBackgroundColor", Color.parseColor(appData.getString("background")));

            views.setOnClickPendingIntent(R.id.appwidget_wrapper, pendingIntent);
            appWidgetManager.updateAppWidget(appWidgetId, views);

            appWidgetManager.updateAppWidget(appWidgetId, views);
        } catch (JSONException e) {
            e.printStackTrace();
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
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}