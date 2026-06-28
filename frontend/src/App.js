import React, { useState } from "react";
import {
  AppProvider,
  Page,
  Layout,
  Card,
  TextField,
  Button,
  Banner,
  BlockStack,
} from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { sendAnnouncementTextService } from "./services";

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  
  const handleSave = async () => {
    if (!text) {
      setStatus({ type: "critical", message: "Please enter some text!" });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

   
    console.log(text);
    try {
      
      const response = await sendAnnouncementTextService(text);
      if (response.data.status === 200) {
        setStatus({
          type: "success",
          message: "✅ Successfully saved to MongoDB and Shopify Metafield!",
        });
        setText("");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "critical",
        message: "❌ Error: Backend server or Shopify API sync failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Announcement Banner Settings">
        <Layout>
          <Layout.Section>
            <BlockStack gap="400">
              {/* Polaris Banner for displaying success or error messages */}
              {status.message && (
                <Banner title={status.message} tone={status.type} />
              )}

              <Card roundedBorderShape="100">
                <BlockStack gap="400">
                  {/* Text Input Field: Announcement Text */}
                  <TextField
                    label="Announcement Text"
                    value={text}
                    onChange={(value) => setText(value)}
                    placeholder="e.g., Sale 50% Off"
                    autoComplete="off"
                    helpText="The text entered here will appear live on your online store's floating banner."
                  />

                  {/* Save Button */}
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="primary"
                      onClick={handleSave}
                      loading={loading}
                    >
                      Save
                    </Button>
                  </div>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default App;
