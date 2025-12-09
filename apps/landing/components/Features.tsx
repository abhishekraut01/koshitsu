'use client';

import { Users, Lock, Database, Zap, Shield, Eye, Clock, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.section
        id="features"
        className="max-w-7xl mx-auto mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Two Ways to Chat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right level of privacy for every conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Persistent Group Chats</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Like WhatsApp groups, but better. Messages are stored securely in the database for ongoing conversations.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Database className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Stored Messages</p>
                  <p className="text-sm text-muted-foreground">
                    Access your conversation history anytime
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Username Only</p>
                  <p className="text-sm text-muted-foreground">
                    No phone numbers, no personal identifiers
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Text-Only Chat</p>
                  <p className="text-sm text-muted-foreground">
                    Fast, focused messaging for v1
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Ephemeral Private Rooms</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              For truly private conversations. Messages exist only in RAM and disappear forever when you leave.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Auto-Delete</p>
                  <p className="text-sm text-muted-foreground">
                    Room vanishes when the last user leaves
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">RAM Only</p>
                  <p className="text-sm text-muted-foreground">
                    Messages never touch the disk
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Zero Retention</p>
                  <p className="text-sm text-muted-foreground">
                    No logs, no metadata, no trace
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="security"
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Security First
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is not negotiable
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-muted-foreground">
              All messages are encrypted in transit and at rest. Only you and your recipients can read them.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Eye className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Phone Numbers</h3>
            <p className="text-sm text-muted-foreground">
              Create an account with just a username. No phone number, no email required.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Trash2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Zero-Retention Chats</h3>
            <p className="text-sm text-muted-foreground">
              Ephemeral rooms leave no trace. The server retains nothing after you disconnect.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Lock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Private by Design</h3>
            <p className="text-sm text-muted-foreground">
              We can&apos;t read your messages. We don&apos;t track you. We don&apos;t sell your data.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Database className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Minimal Data Storage</h3>
            <p className="text-sm text-muted-foreground">
              We only store what&apos;s necessary for persistent groups. Private rooms? Nothing.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <Zap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-sm text-muted-foreground">
              Don&apos;t trust, verify. Our code is open for audit by security researchers worldwide.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
