package org.nativescript.matitzung;


import android.content.Context;
import android.widget.Toast;

public class Toaster {
    public void show(Context context) {
        CharSequence text ="Hello NativeScript!";
        int duration = Toast.LENGTH_SHORT;

        Toast toast = Toast.makeText(context, text, duration);
        toast.show();
    }

    public String aa(){
        return "aa";
    }
}
